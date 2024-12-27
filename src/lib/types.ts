/** Options for rendering MJML components */
export interface RenderMJMLOptions {
	/** beautify the HTML output */
	beautify?: boolean;
}

/** Options for rendering email components */
export interface RenderOptions extends RenderMJMLOptions, PlainTextOptions {
	/** Convert to plain text */
	plainText?: boolean;
	/** Minify HTML output */
	minify?: boolean;
}

/** Option for Minfiying HTML output */
export interface MinifyOptions {
	collapseWhitespace?: boolean;
	removeComments?: boolean;
	minifyCSS?: boolean;
	removeEmptyAttributes?: boolean;
}

/** Options for generating plain text from HTML */
export interface PlainTextOptions {
	/** Maximum line length */
	wordwrap?: number;
	/** Preserve newlines */
	preserveNewlines?: boolean;
	/** Selectors to format */
	selectors?: Array<{
		/** Selector to format */
		selector: string;
		/** Formatter to use */
		format: string;
		/** Formatter options */
		// options?: any;
	}>;
	/** Formatters to use */
	// formatters?: Record<string, (elem: any, walk: any, builder: any) => void>;
}

/**
 * Email rendering result
 */
export interface RenderResult {
	/** HTML version of the email */
	html: string;
	/** Plain text version of the email */
	plainText: string;
	/** Metadata about the render */
	meta: {
		/** Time taken to render in milliseconds */
		renderTime: number;
		/** Size of rendered HTML in bytes */
		size: number;
	};
}

export interface DefaultUnits {
	backgroundSize?: `${number}px` | `${number}%` | `cover` | `contain` | `auto`;
	borderWidth?: `${number}px`;
	breakpoint?: `${number}px`;
	cellSpacing?: `${number}px`;
	fontSize?: `${number}px`;
	height?: `${number}px`;
	iconHeight?: `${number}px` | `${number}%`;
	iconSize?: `${number}px` | `${number}%`;
	letterSpacing?: `${number}px` | `${number}em`;
	lineHeight?: `${number}px` | 'none';
	paddingBottom?: `${number}px`;
	paddingLeft?: `${number}px`;
	paddingRight?: `${number}px`;
	paddingTop?: `${number}px`;
	width?: `${number}px`;
}
