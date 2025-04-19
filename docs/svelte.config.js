import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const getHighlighter = createHighlighter({
  themes: ['poimandres', 'ayu-dark'],
  langs: ['bash', 'javascript', 'typescript', 'svelte', 'html', 'css', 'markdown']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      // Reuse the same highlighter instance
      const highlighter = await getHighlighter;
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          themes: {
            light: 'ayu-dark',
            dark: 'poimandres'
          }
        })
      );
      return `{@html \`${html}\`}`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    alias: {
      $components: 'src/lib/components',
      '$components/*': 'src/lib/components/*',

      $models: 'src/lib/db/models',
      '$models/*': 'src/lib/db/models/*',

      $queries: 'src/lib/db/queries',
      '$queries/*': 'src/lib/db/queries/*'
    }
  },

  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  extensions: ['.svelte', '.md']
};

export default config;
