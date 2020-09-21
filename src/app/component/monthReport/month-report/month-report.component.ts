import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import{DateModel} from '../../../models/dateModel';
import{Deposit} from '../../../models/deposit';
import{GetDepositMonthService}from '../../../services/deposit/get-deposit-month.service'
import { timestamp } from 'rxjs/operators';
import {GetSpendMonthService} from '../../../services/spend/get-spend-month.service'


@Component({
  selector: 'app-month-report',
  templateUrl: './month-report.component.html',
  styleUrls: ['./month-report.component.css']
})
export class MonthReportComponent implements OnInit {
  public month;
  public year;
  public responseDeposit;
  public responseSpend;
  public totalDeposit;
  public totalSpend;
  public diff;
  constructor(
    private _getServices:GetDepositMonthService,
    private _getServicesS:GetSpendMonthService
  ) {
    
  }

  ngOnInit(): void {
      console.log(this.diff)
    
  }

  onSubmit(){
    let date = new DateModel("",this.month,this.year);
    this.totalDeposit=0;
    this.totalSpend=0;
    this.diff=0;
    if(this.month && this.year){
      this._getServices.getDepositMonth(date).subscribe(
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
      this._getServicesS.getSpendMonth(date).subscribe(
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
