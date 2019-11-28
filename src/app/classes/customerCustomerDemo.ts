export class CustomerCustomerDemo {
  CustomerID : String ;
  CustomerTypeID:  String;
  
  constructor(){
    this.CustomerID = "";
    this.CustomerTypeID = "";
  }

  setData(CustomerID,CustomerTypeID){
    this.CustomerID = CustomerID;
    this.CustomerTypeID = CustomerTypeID;
  }
}
