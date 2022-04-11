const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: __dirname + '/build',
      filename: 'index.js'
    }
  },
  {
      mode: 'development',
      entry: {
          render: './src/views/react.tsx',
          note: './src/components/note.tsx'
      },
      target: 'electron-renderer',
      devtool: 'source-map',
      module: {
          rules: [{
              test: /\.ts(x?)$/,
              include: /src/,
              use: [{ loader: 'ts-loader'}]
          }]
      },
      output: {
          path: __dirname + '/build/views',
          filename: '[name].js',
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: './src/index.html',
          })
      ],
      resolve: {
          extensions: ['.js', '.jsx', '.tsx'],
          modules: ['src', 'node_modules'],
          alias: {
              '@components': path.resolve(__dirname, 'src/components'),
              '@views': path.resolve(__dirname, 'src/views'),
          }
      }
  },
  {
    mode: 'development',
      entry: {
          App: './src/App.tsx',
      },
      target: 'electron-renderer',
      devtool: 'source-map',
      module: {
          rules: [{
              test: /\.ts(x?)$/,
              include: /src/,
              use: [{ loader: 'ts-loader'}]
          }]
      },
      output: {
          path: __dirname + '/build',
          filename: '[name].js',
      },
      resolve: {
          extensions: ['.js', '.jsx', '.tsx'],
          modules: ['src', 'node_modules', 'src/views', 'src/components'],
          alias: {
              '@components': path.resolve(__dirname, 'src/components'),
              '@views': path.resolve(__dirname, 'src/views'),
              '@/': path.resolve(__dirname, 'src/')
          }
      }
  }
];