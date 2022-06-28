export class Computadora {
   
    constructor(id, nombre, monitor, raton, teclado){
      this.idComputadora = id;
      this.nombre = nombre;
      this.monitor = monitor;
      this.teclado = teclado;
      this.raton = raton;
      this.contadorComputadoras = 0
    }
  
    get idComputadora() {
      return this._idComputadora;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get monitor() {
      return this._monitor;
    }
  
    get teclado() {
      return this._teclado;
    }
  
    get raton() {
      return this._raton;
    }
    
    get raton() {
        return this.contadorComputadoras;
    }
  
    set idComputadora(value) {
      this._idComputadora = value;
    }
    
    set nombre(value) {
      this._nombre = value;
    }
  
    set monitor(value) {
      this._monitor = value;
    }
  
    set teclado(value) {
      this._teclado = value;
    }
  
    set raton(value) {
      this._raton = value;
    }

      
    toString() {
      console.log(`Computadora: Id: ${this.idComputadora}  nombre: ${this.nombre} monitor: ${this.monitor} Teclado: ${this.teclado} Raton: ${this.raton}`);
    }  
  }