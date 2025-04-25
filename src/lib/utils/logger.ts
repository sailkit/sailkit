// External dependencies
import chalk from 'chalk';

// Internal dependencies
import { SailKitError, ValidationError } from '../errors.js';
import { formatMjmlError } from './mjmlErrorFormatter.js';

/**
 * Logs an error with appropriate formatting and context
 * @param error The error object to log
 * @param componentName Name of the component where the error occurred
 * @param context Optional context message to prepend
 */
function logError(error: unknown, componentName?: string, context?: string): void {
  const prefix = chalk.bgRed.white.bold(' SailKit ');

  // Format the main error message
  const componentText = componentName ? `${componentName}.svelte` : 'the email template';
  let mainMessage = chalk.bold.redBright(`An error occurred while rendering ${componentText}`);
  if (context) {
    mainMessage += `: ${chalk.redBright(context)}`;
  }

  console.error(`${prefix} ${mainMessage}`);

  if (error instanceof Error) {
    console.error(chalk.yellow(`${chalk.bold('Error:')} ${error.message}`));

    // Traverse the error cause chain
    let currentError: Error | undefined = error;
    while (currentError?.cause instanceof Error) {
      currentError = currentError.cause;

      // Format MJML validation error messages if needed
      let messageToDisplay = currentError.message;
      const isMjmlError =
        currentError instanceof ValidationError || error instanceof ValidationError;

      if (isMjmlError) {
        const { message } = formatMjmlError(messageToDisplay);
        messageToDisplay = message;
      }

      // Skip if the message is empty after formatting
      if (!messageToDisplay) {
        continue;
      }

      // Display the formatted error message
      displayFormattedErrorMessage(messageToDisplay);
    }
  } else {
    console.error(chalk.yellow(`Error details: ${String(error)}`));
  }

  console.error(chalk.gray('----------------------------------------'));
}

/**
 * Displays a formatted error message with proper indentation
 * @private
 */
function displayFormattedErrorMessage(message: string): void {
  const messageLines = message
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  if (messageLines.length === 0) return;

  // eslint-disable-next-line prefer-const
  let [firstLine, ...restOfLines] = messageLines;

  // Remove trailing colon from first line if there are more lines
  if (restOfLines.length > 0 && firstLine.endsWith(':')) {
    firstLine = firstLine.slice(0, -1);
  }

  console.error(chalk.magenta(`${chalk.bold('Caused by:')} ${firstLine}`));

  restOfLines.forEach((line) => {
    console.error(chalk.magenta(`   ${line}`));
  });
}

/**
 * Handles logging and prepares the appropriate error to be thrown based on debug mode.
 * This function *always* throws, ensuring the calling context handles the error.
 * @param error The original caught error.
 * @param context A specific context message for the error.
 * @param componentName Optional name of the component where the error occurred.
 * @throws {SailKitError} Throws a SailKitError with appropriate details.
 */
export function handleError(error: unknown, context: string, componentName?: string): never {
  const isDebugMode = process.env.SAILKIT_DEBUG === 'true' || process.env.SAILKIT_DEBUG === '1';

  logError(error, componentName, context);

  if (isDebugMode) {
    // In debug mode, throw a generic SailKitError with the full cause chain
    throw new SailKitError(context, error instanceof Error ? error : undefined);
  } else {
    // Outside debug mode, throw simpler error
    let errorMessage = context;
    let errorType = 'Error';
    if (error instanceof Error) {
      errorType = error.constructor.name;
      errorMessage = error.message.trim();
    }

    const displayMessage = `${errorType}: ${errorMessage}`;
    const simpleError = new SailKitError(displayMessage);

    // Get simplified stack from original error
    const simplifiedStack = error instanceof Error ? getSimplifiedStackTrace(error) : undefined;

    // Set stack: use simplified if available, otherwise just name + message
    simpleError.stack = simplifiedStack
      ? `${simpleError.name}: ${simpleError.message}\n${simplifiedStack}`
      : `${simpleError.name}: ${simpleError.message}`;

    delete (simpleError as any).cause; // Explicitly remove the cause property
    throw simpleError;
  }
}

/**
 * Generates a simplified stack trace string from an error object.
 * Filters out node_modules and limits the number of lines.
 * @private
 */
function getSimplifiedStackTrace(error: Error): string | undefined {
  if (!error.stack) {
    return undefined;
  }

  const stackLines = error.stack.split('\n').slice(1);
  const relevantStack = stackLines.filter((line) => !line.includes('node_modules')).slice(0, 3);

  if (relevantStack.length === 0) {
    return undefined;
  }

  return relevantStack.map((line) => `    ${line.trim()}`).join('\n');
}
