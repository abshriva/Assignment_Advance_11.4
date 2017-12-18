import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './services/employee-service';
import { EmployeeDropDownService } from './services/employee-drop-dow.service';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { SearchPipe } from './pipes/search-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
    CapitalizePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[EmployeeDropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
