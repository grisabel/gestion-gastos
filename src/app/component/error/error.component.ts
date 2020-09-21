import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public error : String
  constructor(){
      this.error = "LA PÁGINA NO HA SIDO ENCONTRADA"
  }

  ngOnInit(): void {
  }

}
