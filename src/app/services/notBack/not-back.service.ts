import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {GeneralService} from '../general.service'

@Injectable({
  providedIn: 'root'
})
export class NotBackService {

  constructor(private _authService: GeneralService, private _router: Router) { }

    canActivate() {
    
        if (this._authService.getToken()) {
            if(confirm('Si vuelves a la página principal perderás la sesión.')){
              sessionStorage.clear()
              this._router.navigateByUrl('/pagina-principal') 
              return true;
            }else{
              return false;
            }
           
        }else{
          return true;
        }

        
    }
}
