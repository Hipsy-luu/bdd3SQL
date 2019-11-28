import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(0);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(Employee){
    this.connectionService.actualSelectedEmployee = Employee;
    this.connectionService.opc = 1;
  }

  saveEmployee(){
    if(this.connectionService.opc==0){
      this.createEmployee();
    }else{
      this.updateEmployee();
    }
  }

  async createEmployee(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(0);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo empleado.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteEmployee(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(0);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un empleado.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateEmployee(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(0);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un empleado.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
