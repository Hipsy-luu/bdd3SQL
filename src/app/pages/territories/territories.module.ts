import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerritoriesPageRoutingModule } from './territories-routing.module';

import { TerritoriesPage } from './territories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerritoriesPageRoutingModule
  ],
  declarations: [TerritoriesPage]
})
export class TerritoriesPageModule {}
