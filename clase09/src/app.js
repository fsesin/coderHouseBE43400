import express from 'express'
import { __dirname } from './utils.js'
import {engine} from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.use('/',viewsRouter)
app.use('/api/users',usersRouter)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})