/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'src/**/*.ts',
		'src/**/*.tsx',
		'index.tsx',
		'/App/**/*.ts',
		'App.tsx',
		'./types/**/*.ts',
		'App/**/*.tsx',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {},
	},
	plugins: [],
};
