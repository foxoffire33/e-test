module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      prefix: 'tw-',
      ignore: [ /node_modules-/, '.ignore', '#ignore' ]
    },
  },
}
