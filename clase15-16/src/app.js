import express from 'express'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import coursesRouter from './routes/courses.router.js'
import studentsRouter from './routes/students.router.js'

import './db/dbConfig.js'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

// public
app.use(express.static(__dirname+'/public'))

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

// routes
app.use('/api/users',usersRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/students',studentsRouter)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})