/** Custom error class for rendering failures */
export class RenderError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = 'RenderError';
  }

  /**
   * Returns a user-friendly error message including the root cause if available
   */
  get formattedMessage(): string {
    if (this.cause instanceof Error) {
      // If the cause is a ValidationError, return its message
      if (this.cause.name === 'ValidationError' && 'details' in this.cause) {
        return `${this.message}: ${this.cause.message}`;
      }

      // For other error types, try to include their message
      return `${this.message}: ${this.cause.message}`;
    }

    return this.message;
  }
}

/** Error class for MJML validation issues */
export class ValidationError extends RenderError {
  details: ValidationErrorDetail[];

  constructor(message: string, details: ValidationErrorDetail[] = []) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }

  /**
   * Returns a formatted error message with detailed validation issues
   */
  get formattedMessage(): string {
    if (this.details.length === 0) {
      return this.message;
    }

    const errorList = this.details.map((err) => `- <${err.tagName}>: ${err.message}`).join('\n');

    return `\n${errorList}`;
  }
}

/** Structure representing a specific validation error */
export interface ValidationErrorDetail {
  message: string;
  tagName?: string;
}

/**
 * Extracts validation details from MJML error objects
 */
interface MJMLError {
  errors: {
    line: number;
    message: string;
    tagName: string;
    formattedMessage: string;
  }[];
}

export function extractValidationDetails(mjmlError: MJMLError | unknown): ValidationErrorDetail[] {
  // Check if mjmlError is of the expected structure
  if (
    !mjmlError ||
    typeof mjmlError !== 'object' ||
    !('errors' in mjmlError) ||
    !Array.isArray(mjmlError.errors)
  ) {
    return [];
  }

  return (mjmlError.errors as MJMLError['errors']).map((err) => {
    // Format component name by removing mj- prefix and capitalizing first letter
    let formattedTagName = err.tagName.replace('mj-', '');
    formattedTagName = formattedTagName.charAt(0).toUpperCase() + formattedTagName.slice(1);

    return {
      message: err.message || '',
      tagName: formattedTagName
    };
  });
}
