import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegisterService} from '../../services/user/register.service';
import {GLOBAL} from '../../services/global';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  public  user: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _registerService: RegisterService,
    private _route: Router
  ) {
  }

  validatePasswords(){
    if(this.user.value.password!='' && this.user.value.password2!=''){
      if(this.user.value.password===this.user.value.password2){
        return true;
      }
      else{
        return false;
      }
    }
    return true;
   }
  
  validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
  }
  validatePasswordComplex(password){
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password)){
        return true;
    } 
    else{
        return false;
    }
}
  createForm(){
      this.user = this._fb.group({
        name:[null,Validators.required],
        surname: ["", Validators.nullValidator],
        email: [null, Validators.required],
        password: [null, Validators.required],
        password2:[null, Validators.required]
      });
  }
  onSubmit(){
    
    if(this.validatePasswordComplex(this.user.value.password) && this.user.valid && this.validateEmail(this.user.value.email)){
      
      this._registerService.register(this.user.value).subscribe(
        response=>{
            this.user = response.user;
            confirm("El formulario ha sido completado de forma satisfactoria :)");
            this._route.navigateByUrl('pagina-principal')
          
         
        },
        error=>{
          console.log(<any>error);
          alert("Error. El email ya está registrado");
        }
      );
      
    }else{
      alert("El formulario no es correcto");
    }
  }
  ngOnInit(): void {
    this.createForm();
   
  }

}
