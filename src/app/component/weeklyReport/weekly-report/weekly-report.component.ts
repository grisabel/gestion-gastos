import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import{DateModel} from '../../../models/dateModel';
import{Deposit} from '../../../models/deposit';
import{GetDepositService}from '../../../services/deposit/get-deposit.service'
import { timestamp } from 'rxjs/operators';
import {GetSpendService} from '../../../services/spend/get-spend.service'


@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css'],
  providers:[GetDepositService]
})
export class WeeklyReportComponent implements OnInit {
  public week;
  public month;
  public year;
  public responseDeposit;
  public responseSpend;
  public totalDeposit;
  public totalSpend;
  public diff;
  constructor(
    private _getServices:GetDepositService,
    private _getServicesS:GetSpendService
  ) {
    
  }

  ngOnInit(): void {
      console.log(this.diff)
    
  }

  onSubmit(){
    let date = new DateModel(this.week,this.month,this.year);
    this.totalDeposit=0;
    this.totalSpend=0;
    this.diff=0;
    if(this.week && this.month && this.year){
      this._getServices.getDeposit(date).subscribe(
        response=>{
         this.responseDeposit= response
         for(let i=0;i<this.responseDeposit.length;i++){
          this.totalDeposit += this.responseDeposit[i].deposit;
        }
        this.totalDeposit= Math.floor(this.totalDeposit*100)/100
      
        }, error =>{
          alert("La consulta no se ha podido llevar a cabo")
          console.log(error)
        }
      );
      this._getServicesS.getSpend(date).subscribe(
        response=>{
         this.responseSpend= response
         for(let i=0;i<this.responseSpend.length;i++){
          this.totalSpend += this.responseSpend[i].spend;
        }
        
        this.totalSpend=Math.floor(this.totalSpend*100)/100
        this.diff=this.totalDeposit-this.totalSpend;
        this.diff= Math.floor(this.diff*100)/100
    
        }, error =>{
          alert("La consulta no se ha podido llevar a cabo")
          console.log(error)
        }
      );
     
    }else{
      alert("Los parámetros no están completados")
    }
 
  }


}
