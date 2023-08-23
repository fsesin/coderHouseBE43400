import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

//routes
app.use('/api/views',viewsRouter)


const PORT = 8080

const httpServer = app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})

const socketServer = new Server(httpServer)

const mensajes = []


socketServer.on('connection',socket=>{
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on('disconnect',()=>{
        console.log(`Usuario desconectado: ${socket.id}`);
    })

    socket.on('mensaje',infoMensaje=>{
        mensajes.push(infoMensaje)

        socketServer.emit('chat',mensajes)
    })
    socket.on('usuarioNuevo',usuario=>{
      socket.broadcast.emit('broadcast',usuario)  
    })

})