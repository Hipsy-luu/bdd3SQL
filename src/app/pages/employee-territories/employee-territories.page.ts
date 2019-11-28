import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-territories',
  templateUrl: './employee-territories.page.html',
  styleUrls: ['./employee-territories.page.scss'],
})
export class EmployeeTerritoriesPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(5);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(EmployeeTerritorie){
    this.connectionService.actualSelectedEmployeeTerritories = EmployeeTerritorie;
    this.connectionService.opc = 1;
  }

  saveEmployeeTerritorie(){
    if(this.connectionService.opc==0){
      this.createEmployeeTerritorie();
    }else{
      this.updateEmployeeTerritorie();
    }
  }

  async createEmployeeTerritorie(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(5);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Employee Territorie.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteEmployeeTerritorie(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(5);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un Employee Territorie.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateEmployeeTerritorie(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(5);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un Employee Territorie.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}

