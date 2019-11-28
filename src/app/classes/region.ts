export class Region {
  RegionID : Number ;
  RegionDescription:  String;
  
  constructor(){
    this.RegionID = 0;
    this.RegionDescription = "";
  }

  setData(RegionID,RegionDescription){
    this.RegionID = RegionID;
    this.RegionDescription = RegionDescription;
  }
}
