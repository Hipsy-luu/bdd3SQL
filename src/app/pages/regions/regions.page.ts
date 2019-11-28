import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {


  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(9);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedRegion){
    this.connectionService.actualSelectedRegion = actualSelectedRegion;
    this.connectionService.opc = 1;
  }

  saveactualSelectedRegion(){
    if(this.connectionService.opc==0){
      this.createactualSelectedRegion();
    }else{
      this.updateactualSelectedRegion();
    }
  }

  async createactualSelectedRegion(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(9);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Region',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedRegion(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(9);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Region.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedRegion(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(9);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Region.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
