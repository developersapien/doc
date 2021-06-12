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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
