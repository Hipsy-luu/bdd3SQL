import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(6);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedOrder){
    this.connectionService.actualSelectedOrders = actualSelectedOrder;
    this.connectionService.opc = 1;
  }

  saveactualSelectedOrder(){
    if(this.connectionService.opc==0){
      this.createactualSelectedOrder();
    }else{
      this.updateactualSelectedOrder();
    }
  }

  async createactualSelectedOrder(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(6);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Orden',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedOrder(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(6);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Orden.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedOrder(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(6);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Orden.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}


