/**
 * @module mjmlErrorFormatter
 * @description Utilities for formatting MJML validation errors to be more useful in the SailKit context
 */

export interface FormattedMjmlError {
  message: string;
  originalMessage: string;
}

// Common MJML component names and their SailKit equivalents
const COMPONENT_MAP: Record<string, string> = {
  'mj-head': 'Head',
  'mj-body': 'Body',
  'mj-section': 'Section',
  'mj-group': 'Section.Group',
  'mj-column': 'Column',
  'mj-divider': 'Column.Divider',
  'mj-text': 'Text',
  'mj-button': 'Button',
  'mj-spacer': 'Column.Spacer',
  'mj-image': 'Image',
  'mj-table': 'Table',
  'mj-social': 'Social',
  'mj-social-element': 'Social.Element',
  'mj-wrapper': 'Container',
  'mj-raw': 'Raw'
};

// Common error patterns
const ERROR_PATTERNS = {
  ATTRIBUTES: /Line \d+ of [^\s]+ \((mj-[a-z-]+)\) — Attributes (.*) are illegal/,
  NESTING:
    /Line \d+ of [^\s]+ \((mj-[a-z-]+)\) — [^\s]+ cannot be used inside ([^,]+), only inside: ([^"]+)/,
  UNKNOWN_ELEMENT:
    /Line \d+ of [^\s]+ \(([^)]+)\) — Element [^\s]+ doesn't exist or is not registered/,
  MALFORMED: /Malformed MJML\. Check that your structure is correct and enclosed in <mjml> tags\./
};

/**
 * Format an MJML validation error into a more user-friendly message
 * Handles both single and multiple line error messages
 * @param originalError The original error message from MJML
 * @returns A formatted, user-friendly error message
 */
export function formatMjmlError(originalError: string): FormattedMjmlError {
  const originalMessage = originalError.trim();

  // Check if we have multiple lines of errors
  if (originalMessage.includes('\n')) {
    return formatMultilineError(originalMessage);
  }

  // Process a single line error
  return formatSingleMjmlError(originalMessage);
}

/**
 * Format a multi-line MJML validation error message
 * @private
 */
function formatMultilineError(originalMessage: string): FormattedMjmlError {
  const originalLines = originalMessage
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // Find lines that are actual error messages (starting with "Line")
  const errorLines = originalLines.filter((line) => line.startsWith('Line'));

  // If we have error lines, format them
  if (errorLines.length > 0) {
    // Get the prefix text (everything before the first error line)
    const nonErrorLines = originalLines.filter((line) => !line.startsWith('Line'));
    const formattedLines = errorLines.map((line) => formatSingleMjmlError(line).message);

    // Combine prefix text (if any) with formatted error messages
    let resultMessage = formattedLines.join('\n');

    // If there's prefix text, add it as the first line
    if (nonErrorLines.length > 0) {
      resultMessage = nonErrorLines[0] + '\n' + resultMessage;
    }

    return {
      message: resultMessage,
      originalMessage
    };
  }

  // If no valid error lines found, try to format the whole message
  return formatSingleMjmlError(originalMessage);
}

/**
 * Format a single line of MJML validation error
 * @private
 */
function formatSingleMjmlError(originalError: string): FormattedMjmlError {
  const originalMessage = originalError.trim();

  // Handle illegal attributes errors
  const attributesMatch = originalMessage.match(ERROR_PATTERNS.ATTRIBUTES);
  if (attributesMatch) {
    return formatAttributesError(attributesMatch);
  }

  // Handle nesting errors
  const nestingMatch = originalMessage.match(ERROR_PATTERNS.NESTING);
  if (nestingMatch) {
    return formatNestingError(nestingMatch);
  }

  // Handle unknown elements
  const unknownElementMatch = originalMessage.match(ERROR_PATTERNS.UNKNOWN_ELEMENT);
  if (unknownElementMatch) {
    return formatUnknownElementError(unknownElementMatch);
  }

  // Handle malformed structure errors
  if (ERROR_PATTERNS.MALFORMED.test(originalMessage)) {
    return {
      message: 'Invalid template: Check that your structure is correct and enclosed in <Html> tags',
      originalMessage
    };
  }

  // Default formatting for unrecognized error patterns
  return {
    message: `Invalid template: Unrecognized MJML validation error: ${
      originalMessage.split('—').pop()?.trim() || originalMessage
    }`,
    originalMessage
  };
}

/**
 * Format an attributes error
 * @private
 */
function formatAttributesError(match: RegExpMatchArray): FormattedMjmlError {
  const [, component, attributesList] = match;
  const friendlyComponent = COMPONENT_MAP[component] || component;

  // Extract attribute names from the list
  const attrNames = extractAttributeNames(attributesList);
  const attrList = attrNames.join(', ');

  return {
    message: `Invalid template: Illegal Attributes for <${friendlyComponent}>: ${attrList}`,
    originalMessage: match[0]
  };
}

/**
 * Format a nesting error
 * @private
 */
function formatNestingError(match: RegExpMatchArray): FormattedMjmlError {
  const [, component, parent] = match;
  const friendlyComponent = COMPONENT_MAP[component] || component;
  const friendlyParent = COMPONENT_MAP[parent] || parent;

  return {
    message: `Invalid template: <${friendlyComponent}> cannot be used inside <${friendlyParent}>`,
    originalMessage: match[0]
  };
}

/**
 * Format an unknown element error
 * @private
 */
function formatUnknownElementError(match: RegExpMatchArray): FormattedMjmlError {
  const [, element] = match;
  return {
    message: `Invalid template: Element ${element} doesn't exist or is not registered`,
    originalMessage: match[0]
  };
}

/**
 * Extract attribute names from an MJML attributes list
 * @private
 */
function extractAttributeNames(attributesList: string): string[] {
  const attrNames = [];
  const attrPairs = attributesList.split(',');

  // Process pairs (attribute:, "value", attribute2:, "value2")
  for (let i = 0; i < attrPairs.length; i += 2) {
    if (i < attrPairs.length) {
      // Remove any trailing colon from attribute name
      const attrName = attrPairs[i].trim().replace(/:$/, '');
      if (attrName) {
        attrNames.push(attrName);
      }
    }
  }

  return attrNames;
}
