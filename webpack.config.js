const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            { 
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]' 
            }
        ]
    }
};

