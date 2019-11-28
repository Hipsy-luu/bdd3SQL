import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-demographics',
  templateUrl: './customer-demographics.page.html',
  styleUrls: ['./customer-demographics.page.scss'],
})
export class CustomerDemographicsPage implements OnInit {

   
  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(4);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(CustomerDemographics){
    this.connectionService.actualSelectedCustomerDemographics = CustomerDemographics;
    this.connectionService.opc = 1;
  }

  saveCustomerDemographics(){
    if(this.connectionService.opc==0){
      this.createCustomerDemographics();
    }else{
      this.updateCustomerDemographics();
    }
  }

  async createCustomerDemographics(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(4);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo cliente demographic.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteCustomerDemographics(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(4);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un cliente demographic.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateCustomerDemographics(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(4);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un cliente demographic.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
