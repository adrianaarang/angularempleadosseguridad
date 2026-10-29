import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public contador = this._serviceSignal.contador;
  public usuario = this._serviceAuth.user;

  logOutEmpleado(): void {
    sessionStorage.removeItem("TOKEN");
    this._serviceSignal.contador.set(0);
    this._serviceAuth.logOutEmpleado();
  }
}
