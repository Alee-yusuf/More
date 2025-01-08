module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c401f',
          dark: '#0a2913',
          light: '#1a5f32'
        },
        secondary: {
          DEFAULT: '#000000',
          dark: '#1a1a1a',
          light: '#333333'
        },
        accent: {
          DEFAULT: '#1f7f50',
          dark: '#186b42',
          light: '#2a9463'
        },
        background: {
          light: '#ffffff',
          dark: '#111111'
        },
        text: {
          light: '#000000',
          dark: '#ffffff'
        },
        muted: {
          light: '#666666',
          dark: '#999999'
        }
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slight': 'bounceSlight 2s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        }
      },
      boxShadow: {
        'float': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'float-dark': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 15px rgba(31, 127, 80, 0.3)',
        'glow-dark': '0 0 15px rgba(31, 127, 80, 0.5)'
      },
      height: {
        'navbar': '4rem',
        'navbar-mobile': '3.5rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};