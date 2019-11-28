import { Territories } from './../classes/territories';
import { Supplier } from './../classes/supplier';
import { Shipper } from './../classes/shipper';
import { Region } from './../classes/region';
import { Product } from './../classes/product';
import { Orders } from './../classes/order';
import { EmployeeTerritories } from './../classes/employeeTerritories';
import { CustomerDemographics } from './../classes/customerDemographics';
import { CustomerCustomerDemo } from './../classes/customerCustomerDemo';
import { Customers } from './../classes/customer';
import { Categories } from './../classes/categories';
import { Employee } from './../classes/employee';
import { Injectable } from '@angular/core';

import { Artist } from '../classes/artist.class';

import { HttpClient } from '@angular/common/http';

import { OrderDetails } from '../classes/orderDetails';
@Injectable({
  providedIn: 'root'
})
export class ConnectionAppiService {
  url = "http://localhost:4000";

  actualYear = new Date().getFullYear();
  actualSelectedArtist;
  actualSelectedEmployee : Employee;
  actualSelectedCategorie : Categories;
  actualSelectedCustomer : Customers;
  actualSelectedCustomerCustomerDemo : CustomerCustomerDemo;
  actualSelectedCustomerDemographics : CustomerDemographics;
  actualSelectedEmployeeTerritories : EmployeeTerritories;
  actualSelectedOrders : Orders;
  actualSelectedOrderDetails : OrderDetails;
  actualSelectedProduct : Product;
  actualSelectedRegion : Region;
  actualSelectedShipper : Shipper;
  actualSelectedSupplier : Supplier;
  actualSelectedTerritorie : Territories;

  artists = [];
  employees = [];
  categories = [];
  customers = [];
  customerCustomerDemo= [];
  customerDemographics= [];
  employeeTerritories = [];
  orders = [];
  ordersDetails = [];
  products = [];
  regions = [];
  shippers = [];
  suppliers = [];
  territories = [];

  opc : Number;

  constructor(public httpClient: HttpClient) {

    let actualYear = new Date().getFullYear();
    this.actualSelectedArtist = new Artist( 0 , "" , "" , "Mexican" , actualYear-1 , actualYear , false );
    this.actualSelectedEmployee = new Employee();//lista
    this.actualSelectedCategorie = new Categories();
    this.actualSelectedCustomer = new Customers();
    this.actualSelectedCustomerCustomerDemo = new  CustomerCustomerDemo();
    this.actualSelectedCustomerDemographics = new  CustomerDemographics();
    this.actualSelectedEmployeeTerritories = new  EmployeeTerritories();
    this.actualSelectedOrders = new Orders();
    this.actualSelectedOrderDetails = new  OrderDetails();
    this.actualSelectedProduct = new Product();
    this.actualSelectedRegion = new  Region();
    this.actualSelectedShipper = new Shipper();
    this.actualSelectedSupplier = new Supplier();
    this.actualSelectedTerritorie = new Territories();
    
    this.getAllData().then((response)=>{
      console.log(response);
    });
  }

  initializeSelectedItems(opc){
    switch (opc) {
      case 0:
        this.actualSelectedEmployee = new Employee();
        break;
      case 1:  
        this.actualSelectedCategorie = new Categories();
        break;
      case 2:  
        this.actualSelectedCustomer = new Customers();
        break;
      case 3:  
        this.actualSelectedCustomerCustomerDemo = new  CustomerCustomerDemo();
        break;
      case 4:  
        this.actualSelectedCustomerDemographics = new  CustomerDemographics();
        break;
      case 5:  
        this.actualSelectedEmployeeTerritories = new  EmployeeTerritories();
        break;
      case 6:  
        this.actualSelectedOrders = new Orders();
      case 7:  
        this.actualSelectedOrderDetails = new  OrderDetails();
        break;
      case 8:  
        this.actualSelectedProduct = new Product();
        break;
      case 9:  
        this.actualSelectedRegion = new  Region();
      case 10:  
        this.actualSelectedShipper = new Shipper();
        break;
      case 11:  
        this.actualSelectedSupplier = new Supplier();
        break;
      case 12:  
        this.actualSelectedTerritorie = new Territories();
        break;
      default:
        break;
    }
    
    this.opc = 0;
  }

  getAllData(){
    return new Promise((resolve,reject)=>{
      /*this.getAllArtists().then(()=>{
        this.getAllCustomers().then(()=>{
          this.getAllTransactions().then(()=>{
            this.getAllWorks().then(()=>{*/
              resolve("Todo obtenido con exito");/*
            });
          });
        });
      });*/
    })
  }

  getAllArtists(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.url+'/artists')
        .subscribe((artists : any) => {
          this.artists = artists;
          resolve();
        })
    })
  }

  createArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.post(this.url+'/artists',this.actualSelectedArtist)
        .subscribe(data => {
          resolve(data);
        })
    })
  }

  deleteArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.delete(this.url+'/artists/'+this.actualSelectedArtist.artistid)
        .subscribe(() => {
          resolve();
        })
    })
  }

  updateArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.put(this.url+'/artists/'+this.actualSelectedArtist.artistid, this.actualSelectedArtist)
        .subscribe(() => {
          resolve();
        });
    })
  }

  
}
