const path = require('path');

const commonConfig = {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', 'jsx' ]
    },
    devtool: 'source-map'
};

const app = {
    ...commonConfig,
    entry: {
        'app':'./src/app.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
}

const bin = {
    ...commonConfig,
    entry: {
        'check-queries':'./src/RcsbGraphQL/Generator/CheckQueries.ts'
    },
    output: {
        filename: '[name].js',
        /*library: 'RcsbChart',
        libraryTarget: 'umd',
        umdNamedDefine: true,*/
        path: path.resolve(__dirname, 'build/bin')
    }
}

module.exports=[app];
