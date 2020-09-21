import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routing, appRountingProviders} from './app.routing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//Componentes
import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import { RegisterComponent } from './component/register/register.component';
import { ManagementComponent } from './component/management/management.component';
import { LoginComponent } from './component/login/login.component';
import { WeeklyReportComponent } from './component/weeklyReport/weekly-report/weekly-report.component';
import { MonthReportComponent } from './component/monthReport/month-report/month-report.component';
import { YearReportComponent } from './component/yearReport/year-report/year-report.component';



//services


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    ManagementComponent,
    LoginComponent,
    WeeklyReportComponent,
    MonthReportComponent,
    YearReportComponent,

 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
