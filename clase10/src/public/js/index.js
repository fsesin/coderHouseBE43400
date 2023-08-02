const socketClient = io()

const formulario = document.getElementById('formulario')
const messageInput = document.getElementById('message')

// socketClient.on('bienvenida',(message)=>{
//     console.log(message);
//     socketClient.emit('respuestaBienvenida','Gracias')
// })

formulario.onsubmit = (e)=>{
    e.preventDefault()
    socketClient.emit('message',messageInput.value)
}

socketClient.on('allMessages',(messages)=>{
    console.log(messages);
})