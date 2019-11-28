import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-territories',
  templateUrl: './territories.page.html',
  styleUrls: ['./territories.page.scss'],
})
export class TerritoriesPage implements OnInit {


  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(12);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedTerritorie){
    this.connectionService.actualSelectedTerritorie = actualSelectedTerritorie;
    this.connectionService.opc = 1;
  }

  saveactualSelectedTerritorie(){
    if(this.connectionService.opc==0){
      this.createactualSelectedTerritorie();
    }else{
      this.updateactualSelectedTerritorie();
    }
  }

  async createactualSelectedTerritorie(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(12);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Territorio',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedTerritorie(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(12);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Territorio.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedTerritorie(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(12);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Territorio.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
