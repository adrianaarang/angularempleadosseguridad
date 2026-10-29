import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, MaybeAsync, GuardResult } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("TOKEN")) {
      //Si tenemos token dejamos pasar
      return true;
    } else {
      //si el usuario no está autorizado, lo llevamos a la pagina de login
      // tenemos que enviar también el resultado de la url  para que no se pierdan los parámetros
      return this._router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }
  }
}
