import { Component, signal, computed,   inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {

  //RECUPERAMOS NUESTRO SERVICIO UTILIZANOD INJECT
  // PARA QUE SEA GINGLETON
  private _serviceSignal: ServiceSignal =
  inject(ServiceSignal);
  //esta variable apunta al contador del servicio.
    public contador= this._serviceSignal.contador;
    public doble = this._serviceSignal.doble;

  reiniciarContador():void{
    this._serviceSignal.reiniciarContador();

  }

  incrementarContador():void{
    this._serviceSignal.incrementarContador();
    
  }
}
