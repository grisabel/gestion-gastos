import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {GeneralService} from '../general.service'

@Injectable({
  providedIn: 'root'
})
export class CanActivatesGuardService implements CanActivate{

  constructor(private _authService: GeneralService, private _router: Router) { }

    canActivate() {
    
        if (!this._authService.getToken()) {
            alert('Para acceder a esta ruta necesitas estar logueado')
            this._router.navigate(['/']);
            return false;
        }

        return true;
    }
}
