import { Raton, Teclado } from './entity/DispositivoEntrada.js';
import { Monitor } from './entity/Monitor.js'
import { Computadora } from './entity/Computadora.js'
import { Data } from './entity/Data.js'

class Orden {
  constructor() {
    this.idOrden = Orden.nextId;
    this._data = new Data();
    this._computadoras = [];
    this._contadorOrdenes = 0
  }

  get idOrden() {
    return this._idOrden;
  }

  set idOrden(val) {
    this._idOrden = val;
  }
  
  agregarComputadora(computer){
    this._computadoras.push(computer);
    this._data.save(computer);
    this.greeting(computer);
  }

  greeting(instance){
    instance.toString();
  }

  showData(){
    let data = this._data.getAll();
    console.table(data);
    console.dir(data, {depth: null});
  }

  mostrarOrden() {
    console.log(`Orden: ${this.idOrden}  Items: ${this.count}`)
    this._computadoras.forEach(item => item.toString());
  }

  toString() {
    console.log(`Orden: ${this.idOrden} items: ${this.count}`)
  }
}

const Newraton = {
  idOrden: '1',
  marca: 'LogiTech'
}

const Newteclado = {
  idOrden: 'USB',
  marca: 'LogiTech'
}

const Newmonitor = {
  _idMonitor: '1',
  _marca: 'Logitech',
  _tamaño: 10,
}

let nuevoRaton = new Raton(Newraton);
let nuevoTeclado = new Teclado(Newteclado);
let nuevoMonitor = new Monitor(Newmonitor);
let nuevaComputadora = new Computadora(1,"HP", nuevoMonitor, nuevoRaton, nuevoTeclado);

const nuevaOrden = new Orden();
nuevaOrden.agregarComputadora(nuevaComputadora);
nuevaOrden.mostrarOrden();
nuevaOrden.showData();