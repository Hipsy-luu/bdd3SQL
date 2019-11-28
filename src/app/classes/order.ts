export class Orders {
  OrderID : Number ;
  CustomerID:  String;
  EmployeeID:Number;
  OrderDate:Date;
  RequiredDate:Date;
  ShippedDate:Date;
  ShipVia:Number;
  Freight : String;
  ShipName : String;
	ShipAddress : String;
	ShipCity : String
	ShipRegion : String;
	ShipPostalCode : String
	ShipCountry : String
  
  constructor(){
    this.OrderID = 0;
    this.CustomerID = "";
    this.EmployeeID = 0;
    this.OrderDate = new Date();
    this.RequiredDate = new Date();
    this.ShippedDate = new Date();
    this.ShipVia = 0;
    this.Freight = "";
    this.ShipName = "";
    this.ShipAddress = "";
    this.ShipCity = ""
    this.ShipRegion = "";
    this.ShipPostalCode = ""
    this.ShipCountry = ""
  }

  setData(OrderID,CustomerID,EmployeeID,OrderDate,RequiredDate,ShippedDate,ShipVia,Freight,ShipName,ShipAddress,ShipCity,ShipRegion
      ,ShipPostalCode,ShipCountry){
    this.OrderID = OrderID;
    this.CustomerID = CustomerID;
    this.EmployeeID = EmployeeID;
    this.OrderDate = OrderDate;
    this.RequiredDate = RequiredDate;
    this.ShippedDate = ShippedDate;
    this.ShipVia = ShipVia;
    this.Freight = Freight;
    this.ShipName = ShipName;
    this.ShipAddress = ShipAddress;
    this.ShipCity = ShipCity
    this.ShipRegion = ShipRegion;
    this.ShipPostalCode = ShipPostalCode
    this.ShipCountry = ShipCountry
  }
}
