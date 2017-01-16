const path = require('path')
var vueConfig = require('./vue-loader.config')

module.exports = {
    devtool:'#cheap-source-map',
    port:'0.0.0.0',
    entry:{
        app:'./src/client-entry.js',
        vendor:[
            'es6-promise',
            'firebase/app',
            'firebase/database',
            'vue',
            'vue-router',
            'vuex',
            'vue-router-sync'
        ]
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/dist/',
        filename:'[name].[chunkhash].js'
    },
    resolve:{
        alias:{
            'public':path.resolve(__dirname,'../public')
        }
    },
    module:{
        noParse:/es6-promise\.js$/,// avoid webpack shimming process
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:vueConfig
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node-modules/,
                options:{
                    objectAssign:'Object.assign'
                }
            },
            {
                test:/\.(png|jpg|gif\svg)$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'[name].[ext]?[hash]'
                }
            }
        ]
    },
    performance:{
        hints:process.env.NODE_ENV === 'production' ? 'warning' :false
    }
}