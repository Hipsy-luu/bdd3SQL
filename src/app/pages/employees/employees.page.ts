import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';
import * as server from '../../services/server';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  employees : any = [];
  colectionId : String = 'Employees';

  ngOnInit() {
    this.getItems();
    this.connectionService.initializeSelectedItems(0);
  }

  async getItems(){
   
    await server.getItems(this.colectionId).then(data => {
      this.employees = data;
    });
    this.connectionService.initializeSelectedItems(0);
  }
 
  onSelected(Employee){
    this.connectionService.actualSelectedEmployee = Employee;
    this.connectionService.opc = 1;
  }

  saveEmployee(item){
    if(this.connectionService.opc==0){
      this.createEmployee();
    }else{
      this.updateEmployee(item);
    }
  }

  async createEmployee(){
    server.insert(this.colectionId, this.connectionService.actualSelectedEmployee)
    this.getItems();
    
  }

  async deleteEmployee(item){
    await server.deleteItem(this.colectionId, item.id.toString()).catch(err =>{
      console.log(err);
      
    });
    this.getItems();
  }

  async updateEmployee(item){
    await server.updateItem(this.colectionId, item, item.id.toString());
    this.getItems();
  }
}
