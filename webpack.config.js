const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, 'src/index.js'),
            about: path.resolve(__dirname, 'src/about.js'),
            OurTeam: path.resolve(__dirname, 'src/ourteam.js'),
            sustainability: path.resolve(__dirname, 'src/sustainability.js'),
            career: path.resolve(__dirname,'src/career.js')
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'src/assets/images/[name][ext]',
    publicPath: '/',
  },

  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
      },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
        '/api': 'https://trust-energy.onrender.com/', // Proxy API requests to your Express server
      },
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      assert: false,
      child_process: false, // Exclude 'child_process' since it's not typically used in the browser
      net: false, // Exclude 'net' since it's not typically used in the browser
      dns: false, // Exclude 'dns' since it's not typically used in the browser
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,  // Add rule for Sass files
        use: ['style-loader', 'css-loader', 'sass-loader'],  // Use the Sass loader
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
            filename: 'src/assets/images/[name][ext]',
          },
      },
      {
        test: /\.(mp4|webm)$/,
        type: 'asset/resource',
        generator: {
            filename: 'src/assets/images/[name][ext]',
          },
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO LIST',

      template: 'src/index.html',
      chunks: ['index'],

    }),
    new HtmlWebpackPlugin({
        title: 'About Page',
        chunks: ['about'],
        filename: 'about.html',
        template: 'src/about.html',
        inject: 'body',
        publicPath: '/',
      }),
      new HtmlWebpackPlugin({
        title: 'Our Team',
        chunks: ['OurTeam'],
        filename: 'OurTeam.html',
        template: 'src/OurTeam.html',
        inject: 'body',
        publicPath: '/',
      }),
      new HtmlWebpackPlugin({
        title: 'Sustainability',
        chunks: ['Sustainability'],
        filename: 'sustainability.html',
        template: 'src/sustainability.html',
        inject: 'body',
        publicPath: '/',
      }),
      new HtmlWebpackPlugin({
        title: 'Career',
        chunks: ['Career'],
        filename: 'career.html',
        template: 'src/career.html',
        inject: 'body',
        publicPath: '/',
      }),
  ],
};
