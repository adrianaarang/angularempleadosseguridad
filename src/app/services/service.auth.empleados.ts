import {Injectable, signal} from '@angular/core';
import { Empleado } from '../models/empleado';
import { ServiceEmpleados } from './service.empleados';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthEmpleados {

  constructor(
    private _service:ServiceEmpleados
  ) { }
  //UTILIZAREMO SIGNAL PARA ALMACENAR UN OBJETO EMPLEADO

  public user = signal<Empleado | null>(null);

  async logInEmpleados(token:string): Promise<void>{
    sessionStorage.setItem("TOKEN", token);

    //Recuperamos el empleado y lo almacenaos en la variable signar user
    let empleado = await this._service.getPerfilEmpleadoAsync();
    this.user.set(empleado);
  }

  logOutEmpleado(): void {
    sessionStorage.removeItem("TOKEN");
    this.user.set(null);
  }
}
