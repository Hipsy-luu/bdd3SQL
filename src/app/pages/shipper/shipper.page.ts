import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.page.html',
  styleUrls: ['./shipper.page.scss'],
})
export class ShipperPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(10);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedShipper){
    this.connectionService.actualSelectedShipper = actualSelectedShipper;
    this.connectionService.opc = 1;
  }

  saveactualSelectedShipper(){
    if(this.connectionService.opc==0){
      this.createactualSelectedShipper();
    }else{
      this.updateactualSelectedShipper();
    }
  }

  async createactualSelectedShipper(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(10);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Shipper',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedShipper(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(10);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Shipper.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedShipper(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(10);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Shipper.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
