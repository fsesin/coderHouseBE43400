import express from 'express'
import cookieParser from 'cookie-parser'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import loginRouter from './routes/login.router.js'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
import jwtRouter from './routes/jwt.router.js'
import session from 'express-session'
import mongoStore from 'connect-mongo'
import './persistencia/mongoDB/dbConfig.js'
import passport from 'passport'
import './passport/passportStrategies.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')

//cookies
app.use(cookieParser('secreKeyCookies'))

//sessions
// app.use(session({
//     store: new mongoStore({
//         mongoUrl: 'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/mongoSession43400?retryWrites=true&w=majority'
//     }),
//     secret: 'secretSession',
//     cookie: {maxAge:60000}
// }))

// passport
app.use(passport.initialize())
//app.use(passport.session())

//routes
app.use('/api/login',loginRouter)
app.use('/api/views',viewsRouter)
app.use('/api/users',usersRouter)
app.use('/api/jwt',jwtRouter)


//routes
// app.get('/',(req,res)=>{
//     res.send('Prueba cookies')
// })

// app.get('/guardarCookie',(req,res)=>{
//     res.cookie('cookie2','Segunda cookie').send()
// })

// app.get('/leerCookie',(req,res)=>{
//     console.log(req);
//     const {cookie1} = req.cookies
//     res.json({message:'Leyendo cookie',...req.cookies,...req.signedCookies})
// })

// app.get('/eliminarCookie',(req,res)=>{
//     res.clearCookie('cookie2').send('Eliminando Cookie')
// })

// app.get('/guardarCookieFirmada',(req,res)=>{
//     res.cookie('cookieFirmada','Primera cookie firmada',{signed:true}).send()
// })


const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})