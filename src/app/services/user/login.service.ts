import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {GLOBAL} from '../global';
import { ReturnStatement } from '@angular/compiler';
import {GeneralService} from '../general.service'




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: string;
  private headers : HttpHeaders;
 

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
   }

   login(user):Observable<any>{
    this.headers= new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+ this._generalServices.getToken()});
    return this._http.post<any>(this.url +'login', user, {headers: this.headers});
    }
   
}
