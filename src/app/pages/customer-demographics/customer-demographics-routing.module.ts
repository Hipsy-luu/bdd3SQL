import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDemographicsPage } from './customer-demographics.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerDemographicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDemographicsPageRoutingModule {}
