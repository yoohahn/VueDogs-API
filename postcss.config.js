module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('postcss-cssnext')({
      browsers: ['last 2 versions']
    })
  ]
};
