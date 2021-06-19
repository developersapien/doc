const doctorXtheme = require('@doctorx/theme/doctorxTheme').theme

module.exports = {
  prefix: 'lgn-',
  corePlugins: {
    preflight: true,
   },
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./build/*.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...doctorXtheme,
    extend: {
      backgroundImage: () => ({
        login:
          "url('https://storage.googleapis.com/docx-web-stage.appspot.com/assets/images/bg_1.png')",
        signup:
          "url('https://storage.googleapis.com/docx-web-stage.appspot.com/assets/images/bg_2.png')",
        forgotpass:
          "url('https://storage.googleapis.com/docx-web-stage.appspot.com/assets/images/bg_3.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
