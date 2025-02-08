import type { DefaultUnits } from './types.js';

type ComponentName =
  | 'body'
  | 'button'
  | 'column'
  | 'divider'
  | 'hero'
  | 'image'
  | 'section'
  | 'social-element'
  | 'social'
  | 'table'
  | 'text'
  | 'container';

interface StyleProps {
  /** Global styles that affect all components */
  global?: string;
  /** Component-specific styles */
  components?: Partial<Record<ComponentName, string>>;
  /** Custom CSS rules */
  custom?: Array<
    | string
    | {
        inline: true;
        css: string;
      }
  >;
}

export interface ThemeOptions {
  /** Font configurations */
  fonts?: Array<{
    name: string;
    href: string;
  }>;
  /** Responsive breakpoint */
  breakpoint?: DefaultUnits['breakpoint'];
  /** Style configurations */
  styles?: StyleProps;
}

/**
 * Creates a reusable theme configuration for SailKit email templates
 * @param options Theme configuration options
 * @returns A theme object that can be passed to the Head component
 *
 * @example
 * ```ts
 * const theme = createTheme({
 *   fonts: [
 *     { name: 'Roboto', href: 'https://fonts.googleapis.com/css2?family=Roboto' }
 *   ],
 *   breakpoint: 480,
 *   styles: {
 *     global: 'font-family="Roboto, sans-serif"',
 *     components: {
 *       text: 'color="#333333"',
 *       button: 'background-color="#007bff"'
 *     }
 *   }
 * });
 * ```
 */
export function createTheme(options: ThemeOptions): ThemeOptions {
  return {
    fonts: options.fonts,
    breakpoint: options.breakpoint,
    styles: {
      global: options.styles?.global,
      components: options.styles?.components,
      custom: options.styles?.custom
    }
  };
}
