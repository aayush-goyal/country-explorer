/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            borderRadius: {
                xs: '4px',
                sm: 'calc(var(--radius) - 4px)',
                md: 'calc(var(--radius) - 2px)',
                lg: 'var(--radius)',
                xl: '32px',
                '2xl': '64px'
            },
            borderWidth: {
                '1': '1px'
            },
            boxShadow: {
                normal: '0 4px 4px #64646480'
            },
            colors: {
                jasper: '#BF4E30',
                'ash-gray-light': '#E2E6D9',
                'ash-gray': '#C6CCB2',
                'dark-green': '#093824',
                lavender: '#C9D2F2',
                aquamarine: '#78FECF',
                'metal-10': '#D3D7D9',
                'metal-20': '#B5BDC0',
                'metal-30': '#919CA1',
                'metal-40': '#6C7A82',
                'metal-50': '#475962',
                'metal-base': '#223843',
                'metal-60': '#1C2F38',
                'metal-70': '#17252D',
                'metal-80': '#111C22',
                'metal-90': '#0B1316',
                'metal-100': '#070B0D',
                'amber-10': '#FCFCFD',
                'amber-20': '#FAFAFB',
                'amber-30': '#F7F8F9',
                'amber-40': '#F4F6F7',
                'amber-50': '#F2F3F5',
                'amber-base': '#EFF1F3',
                'amber-60': '#C7C9CB',
                'amber-70': '#9FA1A2',
                'amber-80': '#78797A',
                'amber-90': '#505051',
                'amber-100': '#303031',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground':
                        'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground':
                        'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            fontSize: {
                h1: '39px',
                h2: '31px',
                h3: '25px',
                h4: '20px',
                p: '16px',
                ovlne: '12.8px'
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700'
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
                'marquee-right': 'marquee-right 20s linear infinite',
                'marquee-center-left':
                    'marquee-center-left 20s linear infinite',
                'marquee-center-right':
                    'marquee-center-right 20s linear infinite'
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                'marquee-right': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'marquee-center-left': {
                    '0%': { transform: 'translateX(-25%)' },
                    '100%': { transform: 'translateX(-75%)' }
                },
                'marquee-center-right': {
                    '0%': { transform: 'translateX(-75%)' },
                    '100%': { transform: 'translateX(-25%)' }
                }
            }
        }
    },
    // eslint-disable-next-line global-require
    plugins: [require('tailwindcss-animate')]
};
