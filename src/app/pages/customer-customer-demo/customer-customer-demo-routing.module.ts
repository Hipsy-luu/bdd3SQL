import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerCustomerDemoPage } from './customer-customer-demo.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerCustomerDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerCustomerDemoPageRoutingModule {}
