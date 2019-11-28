import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTerritoriesPageRoutingModule } from './employee-territories-routing.module';

import { EmployeeTerritoriesPage } from './employee-territories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTerritoriesPageRoutingModule
  ],
  declarations: [EmployeeTerritoriesPage]
})
export class EmployeeTerritoriesPageModule {}
