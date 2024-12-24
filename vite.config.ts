import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		include: ['mjml', 'html-minifier', 'html-to-text', 'pretty'],
		esbuildOptions: {
			target: 'esnext'
		}
	},
	build: {
		commonjsOptions: {
			include: [/mjml/, /html-minifier/, /node_modules/],
			requireReturnsDefault: 'auto'
		}
	}
};

export default config;
