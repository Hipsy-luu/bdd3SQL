import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-customer-demo',
  templateUrl: './customer-customer-demo.page.html',
  styleUrls: ['./customer-customer-demo.page.scss'],
})
export class CustomerCustomerDemoPage implements OnInit {

  
  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(3);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(CustomerDemo){
    this.connectionService.actualSelectedCustomerCustomerDemo = CustomerDemo;
    this.connectionService.opc = 1;
  }

  saveCustomerDemo(){
    if(this.connectionService.opc==0){
      this.createCustomerDemo();
    }else{
      this.updateCustomerDemo();
    }
  }

  async createCustomerDemo(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(3);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo cliente demo.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteCustomerDemo(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(3);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un cliente demo.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateCustomerDemo(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(3);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un cliente demo.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}

