/**
 * @module errors
 * @description Custom error types for SailKit
 */

/**
 * Base error class for all SailKit specific errors.
 */
export class SailKitError extends Error {
  public readonly cause: Error | undefined;

  constructor(message: string, cause?: Error | unknown) {
    super(message);
    this.name = this.constructor.name;

    if (cause instanceof Error) {
      this.cause = cause;
    }

    // Maintains proper stack trace in V8 environments (Node.js, Chrome)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Error during the rendering process.
 */
export class RenderError extends SailKitError {}

/**
 * Error specifically related to validation or conversion.
 */
export class ValidationError extends RenderError {}

/**
 * Error during the preview generation or display process.
 */
export class PreviewError extends SailKitError {}
