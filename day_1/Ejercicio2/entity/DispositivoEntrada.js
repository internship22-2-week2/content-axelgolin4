class DispositivoEntrada{
    constructor(DispositivoEntrada){
        this._idOrden = DispositivoEntrada.idOrden;
        this._marca = DispositivoEntrada.marca;
    }

      get idOrden() {
        return this._idOrden;
      }
    
      get marca() {
        return this._marca;
      }
    
      set idOrden(value) {
        this._idOrden = value;
      }
    
      set marca(value) {
        this._marca = value;
      }
}

export class Teclado extends DispositivoEntrada{
    constructor(Teclado){
        super(Teclado);
        this._idTeclado = Teclado.idTeclado;
        this._contadorTeclado = 0;
    }
      get idTeclado() {
        return this._idTeclado;
      }
      get contadorTeclado() {
        return this._contadorTeclado;
      }
    
      set idTeclado(val) {
        this._idRaton = val;
      }
      set contadorTeclado(val) {
        this._contadorRatones = _contadorRatones +1;
      }
    
      toString(){
          console.log(`Raton Id: ${this._idRaton} entrada: ${this.tipoEntrada} marca: ${this.marca} Existencia: ${this._contadorRatones}`);
      }
}

export class Raton extends DispositivoEntrada{
    constructor(Raton){
        super(Raton);
        this._idRaton = Raton.grade;
        this._contadorRatones = 0;
    }
      get idRaton() {
        return this._idRaton;
      }
      get contadorRatones() {
        return this._contadorRatones;
      }
    
      set idRaton(val) {
        this._idRaton = val;
      }
      set contadorRatones(val) {
        this._contadorRatones = _contadorRatones +1;
      }
    
      toString(){
          console.log(`Raton Id: ${this.idRaton}, entrada: ${this.tipoEntrada}, marca: ${this.marca} `);
      }
 
}
