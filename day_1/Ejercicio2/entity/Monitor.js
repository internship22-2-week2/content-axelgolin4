export class Monitor{
    constructor(Monitor){
        this._idMonitor = Monitor.idMonitor;
        this._marca = Monitor.marca;
        this._tamaño = Monitor.tamaño;
        this._contadorMonitores = 0;
    }

    
      get idMonitor() {
        return this._idMonitor;
      }
    
      get marca() {
        return this._marca;
      }
    
      get tamanio() {
        return this._tamaño;
      }

      get contadorMonitores() {
        return this._contadorMonitores;
      }


      
      set idMonitor(value) {
        this._idMonitor = value;
      }
    
      set marca(value) {
        this._marca = value;
      }
    
      set tamaño(value) {
        this._tamaño = value;
      }

      set contadorMonitores(a) {
        this._contadorMonitores = this._contadorMonitores +1;
      }
    
    
      toString() {
        console.log(`Monitor: Id: ${this._idMonitor} marca: ${this._marca} tamaño: ${this._tamanio} Existencia: ${this._contadorMonitores}`);
      }

}
