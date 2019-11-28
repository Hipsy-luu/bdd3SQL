export class Territories {
  TerritoryID : String ;
  TerritoryDescription:  String;
  RegionID:Number;
  
  constructor(){
    this.TerritoryID = "";
    this.TerritoryDescription = "";
    this.RegionID = 0;
  }

  setData(TerritoryID,TerritoryDescription,RegionID){
    this.TerritoryID = TerritoryID;
    this.TerritoryDescription = TerritoryDescription;
    this.RegionID = RegionID;
  }
}
