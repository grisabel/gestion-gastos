import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/user/login.service';
import {AddDepositService} from '../../services/deposit/add-deposit.service';
import {AddSpendService} from '../../services/spend/add-spend.service';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {GeneralService} from '../../services/general.service'


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers:[LoginService,
           AddDepositService,
           GeneralService,
           AddSpendService]
})
export class ManagementComponent implements OnInit {

  public identity;
  public token;
  public deposit: FormGroup;
  public spend: FormGroup;


  constructor(
    private _loginServices: LoginService,
    private _ingresoServices: AddDepositService,
    private _gastoServices: AddSpendService,
    private _generalServices: GeneralService,
    private _route: Router,
    private _fbIngresos: FormBuilder,
    private _fbGastos: FormBuilder,
  ) { 
    this.token = _generalServices.getToken();
    this.identity = _generalServices.getIdentity();

  }

  ngOnInit(): void {
    this.createFormIngreso()
    this.createFormGasto()
    console.log(sessionStorage)
  }

  
 
  logOut(){
    if(confirm('¿Estás seguro que quieres cerrar sesión?')){
      sessionStorage.clear();
      this._route.navigateByUrl('/pagina-principal') 
    }
  }

  createFormIngreso(){
    this.deposit = this._fbIngresos.group({
      capacity:[null, Validators.required],
      deposit:[null, Validators.required],
      date:[null,Validators.required],
      comment:[]
    })
  }
  aniadirIngreso(){
    if(this.deposit.value.deposit===null ||this.deposit.value.deposit<0||this.deposit.value.capacity===null || 
      this.deposit.value.date ===null){
        alert("ERROR. Los campos no son correctos")

    }else{
      this.deposit.value.deposit=Math.floor(this.deposit.value.deposit*100)/100
      if(this.deposit.value.comment){
        if(this.deposit.value.comment.length>40){
          alert('El comentario no puede superar los 40 caracteres');
        }
        else{
          this._ingresoServices.addDeposit(this.deposit.value).subscribe(
            (response:any)=>{
                alert('El ingreso se ha guardado correctamente')
              this.deposit.reset();
    
            },
            error=>{
              console.log(error);
            }
          );
        }
      }else{
        this._ingresoServices.addDeposit(this.deposit.value).subscribe(
          (response:any)=>{
              alert('El ingreso se ha guardado correctamente')
            this.deposit.reset();
  
          },
          error=>{
            console.log(error);
          }
        );
      }
      
      
    }
    
  }
  createFormGasto(){
    this.spend = this._fbGastos.group({
      capacity:[null,Validators.required],
      spend:[null,Validators.required],
      date:[null,Validators.required],
      comment:[]
    })
  }
  aniadirGasto(){
    if(this.spend.value.spend===null||this.spend.value.spend<0 ||this.spend.value.capacity===null || 
      this.spend.value.date ===null){
        alert("ERROR. Los campos no son correctos")

    }else{
      this.spend.value.spend=Math.floor(this.spend.value.spend*100)/100
      if(this.spend.value.comment){
        if(this.spend.value.comment.length>40){
          alert('El comentario no puede superar los 40 caracteres');
        }else{
          this._gastoServices.addSpend(this.spend.value).subscribe(
            (response:any)=>{
                alert('El gasto se ha guardado correctamente')
                this.spend.reset()
               
            },
            error=>{
              console.log(error);
            }
          );
        }
      }else{
        this._gastoServices.addSpend(this.spend.value).subscribe(
          (response:any)=>{
              alert('El gasto se ha guardado correctamente')
              this.spend.reset()
             
          },
          error=>{
            console.log(error);
          }
        );
      }
      
     
    }
    
  }

}
