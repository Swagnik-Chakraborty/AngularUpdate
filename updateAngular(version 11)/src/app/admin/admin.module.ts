import { HttpClientModule } from '@angular/common/http';
import { DisplayDataService } from './../../services/displayData.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DataDisplayComponent } from './data-display/data-display.component';
console.log("ss");
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule

 
  ],
  providers:[DisplayDataService],
  declarations: [LoginComponent, DataDisplayComponent]
})
export class AdminModule { }
