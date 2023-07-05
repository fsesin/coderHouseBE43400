// ES7

const expAnterior = Math.pow(2, 3)
const exp = 2 ** 3

//console.log(expAnterior,exp);

const array = [2, 3, 4, 5, 6, 7, 8]

//console.log(array.includes(4));

// ES8

// const obj = {
//   nombre: 'Juan',
//   apellido: 'Hoyos',
//   email: 'jhoyos@mail.com',
//   dni: '12345678',
// }

// const arrayObj = Object.entries(obj)
// const arrayObjMod = arrayObj.map(([k, v]) => [k, `${v} modificado`])

// const objMod = Object.fromEntries(arrayObjMod)

//console.log(objMod)

// ES9
// SPREAD

const animales1 = ['perro', 'gato', 'conejo', 'raton']
const animales2 = ['vaca', 'toro', 'caballo', 'cerdo']

const obj1 = {
  nombre: 'Ipad',
  descripcion: 'ultimo ipad',
}

const obj2 = {
  precio: 500,
  stock: 25,
}

//const animales = animales1.concat(animales2)
const animales = [...animales1, ...animales2]
const obj = { ...obj1, ...obj2 }
//console.log(obj);

const objCopia = { ...obj, id: 1, disponible: true, nombre: 'TV' }
//objCopia.nombre = 'Iphone'
//console.log(objCopia);

// REST

const { id, disponible, ...otrasProps } = objCopia
//console.log(otrasProps);

function sumar(...numeros) {
  console.log(numeros)
}

//sumar(1,2,3,4)

// ES10

const string = '      hola a todos      '
// 'hola a todos'
//console.log(string.trim());

const arrayNum = [1, 2, 3, 4, [5, 6, 7, 8, [1, 2, 3, 4, 5, [6, 7, 8, 9]]]]
//console.log(arrayNum.flat(Infinity))

//ES11

// || or
const number = 0
//console.log(number || 10); // 0 - null - undefined - '' - NaN
//console.log(number ?? 10); // null - undefined

// class

class TicketManager {
  #precioBaseDeGanancia = 0.15
  constructor() {
    this.eventos = []
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const id =
      this.eventos.length === 0
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1

    // let id
    // if(this.eventos.length === 0){
    //     id=1
    // } else {
    //     id = this.eventos[this.eventos.length - 1].id + 1
    // }

    const nuevoEvento = {
      id,
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    }
    this.eventos.push(nuevoEvento)
  }

  agregarUsuario(idEvento,idUsuario){
    const evento = this.eventos.find(e=>e.id===idEvento)
    if(!evento){
        console.log('Evento no existe');
    } else {
        evento.participantes.push(idUsuario)
    }
  }
}

const manager1 = new TicketManager()
manager1.agregarEvento('Concierto1','Lugar1',5,100)
manager1.agregarUsuario(1,1)
console.log(manager1.getEventos())
