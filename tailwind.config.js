const reduce = require('lodash/reduce');

//
// === Project Config ===
//
const COLORS = {
	black: '#0B182B',
	white: '#FFF',
	offwhite: '#F1F2F4',
	gray: '#A5ADB5',
	'gray-medium': '#4F5D70',
	'gray-dark': '#2C394C',
	'product-bondia': '#994C72',
};

const SPACING = {
	'container-mobile': '20px',
	'container-desktop': '36px',
	'gutter-mobile': '20px',
	'gutter-desktop': '32px',
};

const FONT_FAMILIES = {
	sans: [
		"'PP Mori', 'Helvetica Neue LT Std', -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif",
		{
			fontFeatureSettings: '"ss02" on',
		},
	],
	serif: ['HAL Timezone', 'Georgia', 'serif'],
};

const GRID_COLUMNS = 12;
const GRID_MAX_WIDTH = 1900;

const MAX_SPACER = 100;
const MAX_Z_INDEX = 100;

//
// === Generate Config file ===
//

const generateValues = (max, factor = 1, unit = 'px') =>
	new Array(max)
		.fill()
		.map((_, i) => i)
		.reduce((acc, val) => {
			acc[val] = `${val * factor}${unit}`;
			return acc;
		}, {});

const theme = {
	screens: {
		'2xs': '360px',
		xs: '400px',
		sm: '600px',
		md: '800px',
		lg: '1000px',
		xl: '1200px',
		'2xl': '1400px',
		'3xl': '1600px',

		// Overrides
		100: '100px',
		200: '200px',
		300: '300px',
		400: '400px',
		500: '500px',
		600: '600px',
		700: '700px',
		800: '800px',
		900: '900px',
		1000: '1000px',
		1100: '1100px',
		1200: '1200px',
		1300: '1300px',
		1400: '1400px',
		1500: '1500px',
		1600: '1600px',
	},
	colors: ({colors}) => ({
		inherit: colors.inherit,
		current: colors.current,
		transparent: colors.transparent,
		...COLORS,
	}),
	columns: {
		auto: 'auto',
		...generateValues(GRID_COLUMNS, 1, ''),
	},
	spacing: {
		px: '1px',
		half: '5px',
		...generateValues(MAX_SPACER, 10),
		...SPACING,
	},
	borderColor: ({theme}) => ({
		...theme('colors'),
		DEFAULT: 'currentColor',
	}),
	borderRadius: {
		0: '0px',
		5: '5px',
		10: '10px',
		40: '40px',
		50: '50px',
		80: '80px',
		full: '100%',
	},
	fontFamily: FONT_FAMILIES,
	fontSize: {
		...generateValues(200),
	},
	lineHeight: {
		...generateValues(200),
	},
	fontWeight: {
		100: 100,
		200: 200,
		300: 300,
		400: 400,
		500: 500,
		600: 600,
		700: 700,
		800: 800,
		900: 900,
	},
	letterSpacing: {
		tighter: '-0.03em',
		tight: '-0.02em',
		normal: '0',
		wide: '0.04em',
	},
	maxWidth: {
		grid: `${GRID_MAX_WIDTH}px`,
		...generateValues(100, 10),
	},
	height: {
		auto: 'auto',
		full: '100%',
		...generateValues(MAX_SPACER, 10),
		...SPACING,
	},
	transitionTimingFunction: {
		DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
		appear: 'cubic-bezier(0.16, 1, 0.3, 1)',
		'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
		'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
		'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
		'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
		'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
		'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
		'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
		'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
		'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
		'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
		'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
		'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
		'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
		'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
		'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
		'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
		'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
		'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
		'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
		'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	},
	transitionDuration: {
		100: '100ms',
		200: '200ms',
		300: '300ms',
		400: '400ms',
		500: '500ms',
		600: '600ms',
		700: '700ms',
		800: '800ms',
		900: '900ms',
		1000: '1000ms',
	},
	zIndex: {
		auto: 'auto',
		...generateValues(MAX_Z_INDEX, 10, ''),
	},
	aspectRatio: {
		square: '1 / 1',
		video: '1920 / 1080',
	},
	// Shadow generator: https://www.joshwcomeau.com/shadow-palette/
	boxShadow: {
		low: '0px 1px 1.1px hsl(221deg 4% 73% / 0.06), 0px 1.5px 1.7px -1.2px hsl(221deg 4% 73% / 0.06), 0px 3.2px 3.6px -2.5px hsl(221deg 4% 73% / 0.06)',
		medium: '0px 1px 1.1px hsl(221deg 4% 73% / 0.22), 0px 2.8px 3.1px -0.8px hsl(221deg 4% 73% / 0.22), 0px 6.7px 7.5px -1.7px hsl(221deg 4% 73% / 0.22), 0.1px 16.1px 18.1px -2.5px hsl(221deg 4% 73% / 0.22)',
		high: '0px 1px 1.1px hsl(221deg 4% 73% / 0.2), 0px 3.9px 4.4px -0.4px hsl(221deg 4% 73% / 0.2), 0px 7px 7.9px -0.7px hsl(221deg 4% 73% / 0.2), 0px 11.2px 12.6px -1.1px hsl(221deg 4% 73% / 0.2), 0.1px 17.7px 19.9px -1.4px hsl(221deg 4% 73% / 0.2), 0.1px 27.5px 30.9px -1.8px hsl(221deg 4% 73% / 0.2), 0.1px 41.5px 46.7px -2.1px hsl(221deg 4% 73% / 0.2), 0.2px 61px 68.6px -2.5px hsl(221deg 4% 73% / 0.2)',
	},
};

module.exports = {
	content: [
		'./assets/**/*.liquid',
		'./config/**/*.liquid',
		'./layout/**/*.liquid',
		'./sections/**/*.liquid',
		'./snippets/**/*.liquid',
		'./templates/**/*.liquid',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme,
	plugins: [],
};
