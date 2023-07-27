import express from 'express'
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import ordersRouter from './routes/orders.router.js'
import { __dirname } from './utils.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))


// routes
app.use('/api/products',productsRouter)
app.use('/api/users',usersRouter)
app.use('/api/orders',ordersRouter)


const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})