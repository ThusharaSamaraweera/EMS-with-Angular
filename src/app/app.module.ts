import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LkrFormatterPipe } from './shared/lkr-formatter.pipe';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeGuard } from './employees/create-employee.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LkrFormatterPipe,
    ProgressBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'employees/:id',
        component: EmployeesComponent,
        canActivate: [CreateEmployeeGuard]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
