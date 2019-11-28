export class CustomerDemographics {
  CustomerTypeID : String ;
  CustomerDesc:  String;
  
  constructor(){
    this.CustomerTypeID = "";
    this.CustomerDesc = "";
  }

  setData(CustomerTypeID,CustomerDesc){
    this.CustomerTypeID = CustomerTypeID;
    this.CustomerDesc = CustomerDesc;
  }
}
