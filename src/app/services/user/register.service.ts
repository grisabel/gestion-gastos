import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {GLOBAL} from '../global';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public url: string;
  private headers : HttpHeaders;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }
   register(user_to_register): Observable<any>{

    this.headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._http.post(this.url + 'registro', user_to_register, {headers: this.headers});   
   }

   
   
}
