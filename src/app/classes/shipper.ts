export class Shipper {
  ShipperID : Number ;
  CompanyName:  String;
  Phone:String;
  
  constructor(){
    this.ShipperID = 0;
    this.CompanyName = "";
    this.Phone = "";
  }

  setData(ShipperID,CompanyName,Phone){
    this.ShipperID = ShipperID;
    this.CompanyName = CompanyName;
    this.Phone = Phone;
  }
}
