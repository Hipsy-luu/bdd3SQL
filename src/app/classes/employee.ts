export class Employee {
  EmployeeID : Number ;
  LastName:  String;
  FirstName:String;
  Title:String;
  TitleOfCourtesy:String;
  BirthDate:Date;
  HireDate:Date;
  Address : String;
  City : String;
	Region : String;
	PostalCode : String
	Country : String;
	HomePhone : String
	Extension : String
	Photo : String
	Notes : String
	ReportsTo : Number
  PhotoPath : String
  
  constructor(){
    this.EmployeeID = 0;
    this.LastName = "";
    this.FirstName = "";
    this.Title = "";
    this.TitleOfCourtesy = "";
    this.BirthDate = new Date();
    this.HireDate = new Date();
    this.Address = "";
    this.City = "";
    this.Region = "";
    this.PostalCode = ""
    this.Country = "";
    this.HomePhone = ""
    this.Extension = ""
    this.Photo = ""
    this.Notes = ""
    this.ReportsTo = 0
    this.PhotoPath = ""
  }

  setData(EmployeeID,LastName,FirstName,Title,TitleOfCourtesy,BirthDate,HireDate,Address,City,Region,PostalCode,Country
      ,HomePhone,Extension,Photo,Notes,ReportsTo,PhotoPath){
    this.EmployeeID = EmployeeID;
    this.LastName = LastName;
    this.FirstName = FirstName;
    this.Title = Title;
    this.TitleOfCourtesy = TitleOfCourtesy;
    this.BirthDate = BirthDate;
    this.HireDate = HireDate;
    this.Address = Address;
    this.City = City;
    this.Region = Region;
    this.PostalCode = PostalCode
    this.Country = Country;
    this.HomePhone = HomePhone
    this.Extension = Extension
    this.Photo = Photo
    this.Notes = Notes
    this.ReportsTo = ReportsTo
    this.PhotoPath = PhotoPath
  }
}
