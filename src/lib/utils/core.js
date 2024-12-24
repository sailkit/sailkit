import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import CommonJS modules using require
const mjml2html = require('mjml');
const minify = require('html-minifier').minify;

export { mjml2html, minify };
