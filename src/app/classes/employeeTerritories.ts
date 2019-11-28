export class EmployeeTerritories {
  EmployeeID : Number ;
  TerritoryID:  String;
  
  constructor(){
    this.EmployeeID = 0;
    this.TerritoryID = "";
  }

  setData(EmployeeID,TerritoryID){
    this.EmployeeID = EmployeeID;
    this.TerritoryID = TerritoryID;
  }
}
