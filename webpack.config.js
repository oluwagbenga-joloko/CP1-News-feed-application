function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map'; // enables source map
  }

  return false;
}
const Dotenv = require('dotenv-webpack');


module.exports = {
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
    })
  ],
  entry: {
    main: './src/main.jsx'
  },
  output: {
    filename: './dist/scripts/[name].js',
  },
  devtool: getDevTool(),
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: ['file-loader?name=/images/[name].[ext]']
      }
    ]
  },
  node: {
    fs: 'empty'
  },
};
