import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';
import * as server from '../../services/server';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.page.html',
  styleUrls: ['./shipper.page.scss'],
})
export class ShipperPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  objects : any = [];
  colectionId : String = 'Shippers';

  ngOnInit() {
    this.getItems();
    this.connectionService.initializeSelectedItems(0);
  }

  async getItems(){
    await server.getItems(this.colectionId).then(data => {
      this.objects = data;
    });
    this.connectionService.initializeSelectedItems(0);
  }
 
  onSelected(Employee){
    this.connectionService.actualSelectedEmployee = Employee;
    this.connectionService.opc = 1;
  }

  saveItem(item){
    if(this.connectionService.opc==0){
      this.createItem();
    }else{
      this.updateItem(item);
    }
  }

  async createItem(){
    server.insert(this.colectionId, this.connectionService.actualSelectedEmployee)
    this.getItems();
    
  }

  async deleteItem(item){
    await server.deleteItem(this.colectionId, item.id.toString()).catch(err =>{
      console.log(err);
      
    });
    this.getItems();
  }

  async updateItem(item){
    await server.updateItem(this.colectionId, item, item.id.toString());
    this.getItems();
  }
}
