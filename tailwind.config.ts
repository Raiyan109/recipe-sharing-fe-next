import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				bounce404: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(20px)' },
				},
			},
			animation: {
				'bounce-404': 'bounce404 2.5s infinite',
			},
			backgroundImage: {
				'custom-radial': 'radial-gradient(ellipse 200% 100% at bottom left, #183ec2, #EAEEFE 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
