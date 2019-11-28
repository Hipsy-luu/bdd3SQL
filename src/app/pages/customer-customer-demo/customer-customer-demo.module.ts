import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerCustomerDemoPageRoutingModule } from './customer-customer-demo-routing.module';

import { CustomerCustomerDemoPage } from './customer-customer-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerCustomerDemoPageRoutingModule
  ],
  declarations: [CustomerCustomerDemoPage]
})
export class CustomerCustomerDemoPageModule {}
