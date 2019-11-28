import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDemographicsPageRoutingModule } from './customer-demographics-routing.module';

import { CustomerDemographicsPage } from './customer-demographics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDemographicsPageRoutingModule
  ],
  declarations: [CustomerDemographicsPage]
})
export class CustomerDemographicsPageModule {}
