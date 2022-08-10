//creamos la salida por defecto los archivos transpilados con babel
const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    
    
    entry: './js/app.js',
    output:{
        path:path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
          new HtmlWebpackPlugin({ template: "index.html" })
      ],
    target: ['web'],
    mode:'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
              
        },
        watchFiles: [ 'public/js/'],
        hot:false,
        liveReload:true,
        
        compress:true,
        port: 8000,
        
        
        
    },
   
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
