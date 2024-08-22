/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,tsx,jsx}",
	],
	theme: {
		extend: {
			colors: {
				bgray: '#242424'
			},
		},
	},
	plugins: [],
}

