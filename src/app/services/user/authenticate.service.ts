import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {GLOBAL} from '../global';

export interface TokenResponse {
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public url: string;
  private headers : HttpHeaders;
  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   authenticate(user):Observable<any>{
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this._http.post(this.url +'authenticate', user, {headers: this.headers});
  }
   
}
