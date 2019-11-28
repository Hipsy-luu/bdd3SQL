import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  
  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(1);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(Categorie){
    this.connectionService.actualSelectedCategorie = Categorie;
    this.connectionService.opc = 1;
  }

  saveCategorie(){
    if(this.connectionService.opc==0){
      this.createCategorie();
    }else{
      this.updateCategorie();
    }
  }

  async createCategorie(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(1);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo categoria.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteCategorie(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(1);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un categoria.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateCategorie(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(1);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un categoria.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
