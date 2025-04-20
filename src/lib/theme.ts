import type { CustomProperties } from './types.js';

type ComponentName =
  | 'body'
  | 'button'
  | 'column'
  | 'divider'
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
  breakpoint?: CustomProperties['breakpoint'];
  /** Style configurations */
  styles?: StyleProps;
}

/**
 * Creates a reusable theme configuration for SailKit email templates.
 * Basic validation is performed within the Head component itself after merging props.
 * @param options Theme configuration options
 * @returns A theme object that can be passed to the Head component
 *
 * @example
 * ```ts
 * const theme = createTheme({
 *   fonts: [
 *     { name: 'Roboto', href: 'https://fonts.googleapis.com/css2?family=Roboto' }
 *   ],
 *   breakpoint: '480px',
 *   styles: {
 *     global: 'font-family="Roboto, sans-serif" text-align="center"',
 *     components: {
 *       text: 'color="#333333" font-size="16px"',
 *       button: 'background-color="#007bff" border-radius="4px"'
 *     },
 *     custom: [
 *       '.custom-class { color: red; }',
 *       { inline: true, css: 'padding: 10px;' }
 *     ]
 *   }
 * });
 * ```
 */
export function createTheme(options: ThemeOptions): ThemeOptions {
  // No validation needed here; it happens in Head.svelte after merging
  return {
    fonts: options.fonts,
    breakpoint: options.breakpoint,
    styles: options.styles // Return the styles object as is
  };
}
