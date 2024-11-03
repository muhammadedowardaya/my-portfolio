/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        screens: {
            'mobile' : '400px',
            'tablet': '760px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
		extend: {},
	},
	plugins: [],
}
