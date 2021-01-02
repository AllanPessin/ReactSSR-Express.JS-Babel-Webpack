import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import AppComponent from './src/App.js'
import axios from 'axios'

const app = express()

app.use(express.static('dist/public'))

app.get('/', function(req, res){
    axios.get('http://localhost:3000/comentarios').then(function(response){
        const html = `
        <!DOCTYPE! html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width", initial-sacel=1.0>
            <title>React no Servidor</title>
        </head>
        <body>
            <div id="app">
                ${ReactDOM.renderToString(<AppComponent comentarios={response.data.slice(0, 2)} />)}
            </div>
            <script>
                localStorage.setItem('comentarios', '${JSON.stringify(response.data)}')
            </script>
            <script src="bundle_client.js"></script>
        </body>
        </html>
        `
        res.send(html);  
    })
})

app.get('/comentarios', function(req, res) {
    res.send([
        {
            id: '001',
            name: 'Allan',
            message: 'Xupinga'
        }
    ])
})

app.listen(3000, function(){
    console.log("Servidor na porta 3000");
})
