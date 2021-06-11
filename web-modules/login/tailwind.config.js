const doctorXtheme = require('@doctorx/theme/doctorxTheme')

module.exports = {
  prefix: 'lgn-',
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./build/*.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...doctorXtheme,
    extend: {
      backgroundImage: () => ({
        login:
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_1.png')",
        signup:
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_2.png')",
        forgotpass:
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_3.png')",
      }),
    },
    screens: {
      'ph': '320px',
      // => @media (min-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
