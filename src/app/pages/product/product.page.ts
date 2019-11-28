import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(8);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(actualSelectedProduct){
    this.connectionService.actualSelectedProduct = actualSelectedProduct;
    this.connectionService.opc = 1;
  }

  saveactualSelectedProduct(){
    if(this.connectionService.opc==0){
      this.createactualSelectedProduct();
    }else{
      this.updateactualSelectedProduct();
    }
  }

  async createactualSelectedProduct(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(8);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo Producto',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteactualSelectedProduct(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(8);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una Producto.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateactualSelectedProduct(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(8);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una Producto.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
