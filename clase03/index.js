function sumar(n1, n2, n3, n4) {
  const resultado = n1 + n2 + n3 + n4
  return resultado
}

const restar = (n1, n2, n3, n4) => {
  const resultado = n1 - n2 - n3 - n4
  return resultado
}

const funcEjm = (n1) => n1 + 5

// sumar(1,2,3,4)
// restar(1,2,3,4)
// funcEjm(1)

// console.log('Primer console.log')

// setTimeout(() => {
//   console.log('Segundo console.log')
// }, 0)

// console.log('Tercer console.log')

// const resultadoSuma = sumar(1, 2, 3, 4)
// let resultadoResta
// setTimeout(() => {
//   resultadoResta = restar(10, 9, resultadoSuma, 4)
// }, 1000)
// console.log(resultadoResta);
// const resultadoEjm = funcEjm(resultadoResta)
// console.log(resultadoEjm)

const arrayAnimales = ['perro', 'gato', 'conejo', 'loro']
const arrayMod = arrayAnimales.map((animal) => `${animal} adoptado`)
//console.log(arrayMod)
//const cbAnimales = (animal)=> `${animal} modificado`

// agregar familiar a un usuario en particular
// function agregarFamiliar(usuarioID, infoFamiliar) {
//   usuarios.findById(usuarioID, function (error, usuario) {
//     if (error) {
//       return error
//     } else {
//       familiares.findAllByLastName(
//         usuario.lastName,
//         function (error, familiares) {
//           if (error) {
//             return error
//           } else {
//             if (familiares.includes(infoFamiliar)) {
//               return 'Este usuario ya fue agregado'
//             } else {
//               familiares.createOne(infoFamiliar, function (error) {
//                 if (error) {
//                   return error
//                 } else {
//                   return 'Familiar guardado con exito'
//                 }
//               })
//             }
//           }
//         }
//       )
//     }
//   })
// }

// funcion que retorna promesa

function promesaFun(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject('Promesa rechazada')
    } else {
      resolve(a + b)
    }
  })
}

// .then .catch
promesaFun(0, 7)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error))

function agregarFamiliar(usuarioId, infoFamiliar) {
  usuarios
    .findById(usuarioId)
    .then((usuario) => {
      return familiares.findAllByLastName(usuario.lastName)
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'Este usuario ya fue agregado'
      } else {
        return familiares.createOne(infoFamiliar)
      }
    })
    .then(() => 'Familiar guardado con exito')
    .catch((error) => error)
}

async function agregarFamiliar(usuarioId, infoFamiliar) {
  try {
    const usuario = await usuarios.findById(usuarioId)
    const familiares = await familiares.findAllByLastName(usuario.lastName)
    if (familiares.includes(infoFamiliar)) {
      return 'Este usuario ya fue agregado'
    }
    await familiares.createOne(infoFamiliar)
    return 'Familiar creado con exito'
  } catch (error) {
    return error
  }
}
