export class Customers {
  CustomerID : String ;
  CompanyName:  String;
  ContactName:String;
  ContactTitle:String;
  Address:String;
  City:String;
  Region:String;
  PostalCode : String;
  Country : String;
	Phone : String;
	Fax : String
  
  constructor(){
    this.CustomerID = "";
    this.CompanyName = "";
    this.ContactName = "";
    this.ContactTitle = "";
    this.Address = "";
    this.City = "";
    this.Region = "";
    this.PostalCode = "";
    this.Country = "";
    this.Phone = "";
    this.Fax = "";
  }

  setData(CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Region,PostalCode,Country,Phone,Fax){
    this.CustomerID = CustomerID
    this.CompanyName = CompanyName
    this.ContactName = ContactName
    this.ContactTitle = ContactTitle
    this.Address = Address
    this.City = City
    this.Region = Region
    this.PostalCode = PostalCode
    this.Country = Country
    this.Phone = Phone
    this.Fax = Fax
  }
}
