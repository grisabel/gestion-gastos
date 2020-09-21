import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public identity:string;
  public token:string;
  constructor() { }
  getIdentity():string{
    let identity =JSON.parse( sessionStorage.getItem('identity'));
    console.log(identity)
    if(identity != 'undefined'){
      this.identity = identity;
    }
    else{
      this.identity= null;
    }
    return this.identity;
  }
  getToken():string{
    let token = sessionStorage.getItem('token')
    if(token != 'undefined'){
      this.token = token;
    }
    else{
      this.token= null;
    }
    return this.token;
  }
}
