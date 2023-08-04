/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				colored: '0px 7px 16px rgba(127, 91, 220, 0.002)',
				coloredHover: ' 0px 16px 25px rgba(127, 91, 220, 0.3)'
			},
			fontFamily: {
				kalam: ['Kalam', 'cursive'],
				sansSerif: ['Source Sans 3', 'sans-serif'],
				mono: ['Source Code Pro', 'monospace']
			},
			colors: {
				lavenderIndigo: '#8657E1',
				daisyBush: '#4714a5',
				goldenFizz: '#fcff34',
				robinEggBlue: '#00e6b7',
				caribeanGreen: '#1fbd96',
				purple: '#1fbd96',
				pastelPurple: '#a696b0',
				monsoon: '#a696b0',
				silver: '#b8b8b8',
				gallery: '#b8b8b8',
				whisper: '#f5f3f5'
			},
			zIndex: {
				navBarToggle: 91,
				navBar: 90
			}
		}
	},
	plugins: []
};
