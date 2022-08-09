//creamos la salida por defecto los archivos transpilados con babel
const path= require('path');

module.exports ={
    entry: './js/app.js',
    output:{
        path:path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }

            }
        ]
    }
}
