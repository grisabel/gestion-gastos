import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service'


@Injectable({
  providedIn: 'root'
})
export class GetSpendMonthService {

  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getSpendMonth(date):Observable<any>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('month', date.month).append('year', date.year);
  
    return this._http.get<any>(this.url +'ObtenerGastoMes', {headers: this.headers, params: this.params});
    }
}