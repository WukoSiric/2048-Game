// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// import adapterGhpages from "svelte-adapter-ghpages";
import adapter from 'svelte-adapter-github';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// adapter: adapter()
		paths: {
			// Comment out for dev comment
			base: dev ? '' : '/2022-2048-game', 
		},
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			domain: '',
			jekyll: false
		}),
	}
};

export default config;
