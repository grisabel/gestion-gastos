import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import { RegisterComponent } from './component/register/register.component';
import { ManagementComponent } from './component/management/management.component';
import {CanActivatesGuardService} from './services/canActivatedGuard/can-activates-guard.service';
import{NotBackService} from './services/notBack/not-back.service';
import { WeeklyReportComponent } from './component/weeklyReport/weekly-report/weekly-report.component';
import {MonthReportComponent} from './component/monthReport/month-report/month-report.component';
import {YearReportComponent} from './component/yearReport/year-report/year-report.component';
import { ModalComponent } from './component/modal/modal/modal.component';

const appRoutes: Routes = [

    {path:"", canActivate: [NotBackService],component: HomeComponent},
    {path: "pagina-principal",canActivate: [NotBackService], component: HomeComponent},
    {path: "formulario", component: RegisterComponent},
    {path: "administracion-de-dinero",canActivate: [CanActivatesGuardService], component: ManagementComponent },
    {path: "error", component: ErrorComponent},
    {path: "informe-semanal",canActivate: [CanActivatesGuardService], component: WeeklyReportComponent},
    {path: "informe-mensual",canActivate: [CanActivatesGuardService], component: MonthReportComponent},
    {path: "informe-anual",canActivate: [CanActivatesGuardService], component:YearReportComponent },
    {path: "**", component: ErrorComponent}
 
]
export const appRountingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);