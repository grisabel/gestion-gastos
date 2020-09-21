import { Component, OnInit, ɵConsole } from '@angular/core';
import { User } from 'src/app/models/user';
import {LoginService} from '../../services/user/login.service';
import {AuthenticateService, TokenResponse} from '../../services/user/authenticate.service';
import {GLOBAL} from '../../services/global';
import {Router} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {GeneralService} from '../../services/general.service'
import {bootstrap} from 'node_modules/bootstrap/dist/js/bootstrap'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, AuthenticateService,GeneralService]
})
export class LoginComponent implements OnInit {

  public user:User;
  public identity: string

  


  constructor(
    private _loginService: LoginService,
    private _authenticate: AuthenticateService,
    private _generalServices: GeneralService,
    private _route: Router
    
  ) { 
    this.user = new User('','','','',null);
  }

  ngOnInit(): void {
    
  }
  validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
  }
  onSubmit(){
  
     //generar token en caso de que no tenga
     if(!this._generalServices.getToken()){
      this._authenticate.authenticate(this.user).subscribe(
        (response:TokenResponse)=>{
          sessionStorage.setItem('token', response.token)
          this.user.token=response.token;
        }, error =>{
          console.log(error)

        });
    }
    this._loginService.login(this.user).subscribe( 
      (response:any)  =>{
        this.identity = JSON.stringify(response.userS);
        sessionStorage.setItem('identity', this.identity)
        this._route.navigateByUrl('administracion-de-dinero')
 
      },
      error => {
        if(error.status === 404){
          alert("El correo electrónico no está registrado")
        }
        else if(error.status === 501){
          alert("El correo electrónico y la contraseña no se corresponden.")
        }
        else{
          alert("Error en el servidor")
        }
        
      });
        

  }
 

}
