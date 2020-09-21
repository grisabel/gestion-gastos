import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/user/login.service';
import {GLOBAL} from '../../services/global';
import { error } from '@angular/compiler/src/util';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {

  public title: String;
  
    constructor(
      private _userServices : LoginService
    ){
        this.title = 'Gestiona tus gastos'; 
       
    }

  ngOnInit(): void {
    
  }

}
