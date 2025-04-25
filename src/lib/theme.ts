import type { CustomProperties } from './types.js';
import type { BodyProps } from './components/body/Body.svelte';
import type { ButtonProps } from './components/button/Button.svelte';
import type { ColumnProps } from './components/column/Column.svelte';
import type { ContainerProps } from './components/container/Container.svelte';
import type { DividerProps } from './components/column/Divider.svelte';
import type { GroupProps } from './components/section/Group.svelte';
import type { ImageProps } from './components/image/Image.svelte';
import type { SectionProps } from './components/section/Section.svelte';
import type { SocialProps } from './components/social/Social.svelte';
import type { SocialElementProps } from './components/social/SocialElement.svelte';
import type { TableProps } from './components/table/Table.svelte';
import type { TextProps } from './components/text/Text.svelte';

type ComponentProps =
  | BodyProps
  | ButtonProps
  | ColumnProps
  | ContainerProps
  | DividerProps
  | GroupProps
  | ImageProps
  | SectionProps
  | SocialProps
  | SocialElementProps
  | TableProps
  | TextProps;

interface StyleProps {
  /** Global styles that affect all components */
  global?: Partial<ComponentProps>;
  /** Component-specific styles */
  components?: {
    body?: Partial<BodyProps>;
    button?: Partial<ButtonProps>;
    column?: Partial<ColumnProps>;
    container?: Partial<ContainerProps>;
    divider?: Partial<DividerProps>;
    group?: Partial<GroupProps>;
    image?: Partial<ImageProps>;
    section?: Partial<SectionProps>;
    social?: Partial<SocialProps>;
    socialElement?: Partial<SocialElementProps>;
    table?: Partial<TableProps>;
    text?: Partial<TextProps>;
  };
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
 *     global: {
 *       fontFamily: "Roboto, sans-serif",
 *       textAlign: "center"
 *     },
 *     components: {
 *       text: {
 *         color: "#333333",
 *         fontSize: "16px"
 *       },
 *       button: {
 *         backgroundColor: "#007bff",
 *         borderRadius: "4px"
 *       }
 *     },
 *     custom: [
 *       '.custom-class { color: red; }',
 *       { inline: true, css: '.footer { padding: 20px; }' }
 *     ]
 *   }
 * });
 *
 * // Use in your email template
 * <Head subject="Welcome" theme={theme} />
 * ```
 */
export function createTheme(options: ThemeOptions): ThemeOptions {
  return {
    fonts: options.fonts,
    breakpoint: options.breakpoint,
    styles: options.styles
  };
}
