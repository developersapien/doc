const doctorXtheme = require('@doctorx/theme/doctorxTheme')

module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./build/*.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...doctorXtheme,
    extend: {
      backgroundImage: () => ({
        "login":
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_1.png')",
        "signIn":
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_2.png')",
        "forgotPass":
          "url('https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/login_3.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
