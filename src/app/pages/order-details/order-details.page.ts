import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(7);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedOrderDetail){
    this.connectionService.actualSelectedOrderDetails = actualSelectedOrderDetail;
    this.connectionService.opc = 1;
  }

  saveactualSelectedOrderDetail(){
    if(this.connectionService.opc==0){
      this.createactualSelectedOrderDetail();
    }else{
      this.updateactualSelectedOrderDetail();
    }
  }

  async createactualSelectedOrderDetail(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(7);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Detalle de orden nuevo',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedOrderDetail(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(7);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Detalle de orden nuevo.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedOrderDetail(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(7);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Detalle de orden nuevo.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}



