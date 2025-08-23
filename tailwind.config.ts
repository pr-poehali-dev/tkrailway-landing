import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#e2e8f0',
				input: '#ffffff',
				ring: '#0ea5e9',
				background: '#ffffff',
				foreground: '#2d3748',
				primary: {
					DEFAULT: '#1a365d',
					foreground: '#ffffff',
					50: '#f0f9ff',
					100: '#e0f2fe', 
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#1a365d',
				},
				secondary: {
					DEFAULT: '#2d3748',
					foreground: '#ffffff',
					50: '#f7fafc',
					100: '#edf2f7',
					200: '#e2e8f0',
					300: '#cbd5e0',
					400: '#a0aec0',
					500: '#718096',
					600: '#4a5568',
					700: '#2d3748',
					800: '#1a202c',
					900: '#171923',
				},
				accent: {
					DEFAULT: '#ed8936',
					foreground: '#ffffff',
					50: '#fffaf0',
					100: '#fef5e7',
					200: '#feebc8',
					300: '#fbd38d',
					400: '#f6ad55',
					500: '#ed8936',
					600: '#dd6b20',
					700: '#c05621',
					800: '#9c4221',
					900: '#7b341e',
				},
				destructive: {
					DEFAULT: '#e53e3e',
					foreground: '#ffffff',
				},
				success: {
					DEFAULT: '#38a169', 
					foreground: '#ffffff',
				},
				warning: {
					DEFAULT: '#ed8936',
					foreground: '#ffffff', 
				},
				muted: {
					DEFAULT: '#f7fafc',
					foreground: '#4a5568',
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#2d3748',
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#2d3748',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '12px',
				md: '8px', 
				sm: '6px',
				xl: '16px',
				'2xl': '20px',
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
				'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;