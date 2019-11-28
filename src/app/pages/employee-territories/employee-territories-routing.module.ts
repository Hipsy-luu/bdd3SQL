import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTerritoriesPage } from './employee-territories.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTerritoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeTerritoriesPageRoutingModule {}
