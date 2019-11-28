import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerritoriesPage } from './territories.page';

const routes: Routes = [
  {
    path: '',
    component: TerritoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerritoriesPageRoutingModule {}
