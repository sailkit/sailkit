import type { RenderOptions } from './types.js';

export const DEFAULT_RENDER_OPTIONS: RenderOptions = {
  plainText: true,
  beautify: true,
  minify: true
};

export const DEFAULT_MJML_OPTIONS = {
  validationLevel: 'strict' as const,
  minify: false,
  beautify: false
};

export const DEFAULT_MINIFY_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  removeEmptyAttributes: true
};

export const DEFAULT_PLAIN_TEXT_OPTIONS = {
  wordwrap: 80,
  preserveNewlines: true,
  selectors: [
    { selector: 'img', format: 'skip' },
    { selector: 'mj-image', format: 'skip' },
    { selector: 'mj-social-element', format: 'skip' },
    { selector: 'mj-button', format: 'skip' },
    { selector: 'mj-divider', format: 'skip' },
    { selector: 'mj-spacer', format: 'skip' },
    { selector: 'mj-title', format: 'skip' },
    { selector: 'mj-preview', format: 'skip' },
    { selector: 'mj-style', format: 'skip' },
    { selector: 'mj-font', format: 'skip' },
    {
      selector: 'mj-table',
      format: 'dataTable',
      options: {
        uppercaseHeaderCells: false,
        trimEmptyLines: true
      }
    }
  ]
  // formatters: {
  // 	anchor: (elem: any, walk: any, builder: any) => {
  // 		const href = elem.getAttribute('href');
  // 		const text = elem.textContent.trim();
  // 		builder.addInline(href ? `${text} (${href})` : text);
  // 	}
  // }
};
