import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service'

@Injectable({
  providedIn: 'root'
})
export class AddDepositService {
  public url: String;
  private headers : HttpHeaders;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
   }
   
   addDeposit(deposit):Observable<any>{
    this.headers= new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    
    return this._http.post<any>(this.url +'AniadirIngreso', deposit, {headers: this.headers});
    }
}
