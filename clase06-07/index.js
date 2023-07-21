//const htpp = require('http') // CommonJS

// servidor con modulo nativo http

// import http from 'http' // ES Module

// const server = http.createServer()

// server.listen(8080,()=>{
//     console.log('Escuchando al puerto 8080');
// })

// servidor con express

import express from 'express'

const usuarios = [
    {
        nombre:'Juan'
    },
    {
        nombre: 'Luis'
    },
    {
        nombre: 'Carlos'
    }
]


const app = express()

app.get('/saludo',(request,response)=>{
    console.log(request.query);
    response.send('Hola a todos nuevamente')
})

app.get('/despedida',(req,res)=>{
    res.send('Nos vemos pronto')
})

app.get('/regreso',(req,res)=>{
    res.json({message:'Usuarios encontrados',usuarios})
})




app.listen(8080,()=>{
    console.log('Servidor creado con express: Escuchando al puerto 8080');
})


