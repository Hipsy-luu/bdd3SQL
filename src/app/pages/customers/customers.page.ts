import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  
  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(2);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(Customer){
    this.connectionService.actualSelectedCustomer = Customer;
    this.connectionService.opc = 1;
  }

  saveCustomer(){
    if(this.connectionService.opc==0){
      this.createCustomer();
    }else{
      this.updateCustomer();
    }
  }

  async createCustomer(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(2);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo cliente.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteCustomer(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(2);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un cliente.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateCustomer(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(2);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un cliente.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
