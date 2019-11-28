export class Product {
  ProductID : Number ;
  ProductName:  String;
  SupplierID:Number;
  CategoryID:Number;
  QuantityPerUnit:String;
  UnitPrice : Number;
  UnitsInStock : Number;
  UnitsOnOrder : Number;
  ReorderLevel : Number;
	Discontinued : Number;
  
  constructor(){
    this.ProductID = 0;
    this.ProductName = "";
    this.SupplierID = 0;
    this.CategoryID = 0;
    this.QuantityPerUnit = "";
    this.UnitPrice = 0;
    this.UnitsInStock = 0;
    this.UnitsOnOrder = 0;
    this.ReorderLevel = 0;
    this.Discontinued = 0;
  }

  setData(ProductID,ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsInStock,UnitsOnOrder,ReorderLevel,Discontinued){
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.SupplierID = SupplierID;
    this.CategoryID = CategoryID;
    this.QuantityPerUnit = QuantityPerUnit;
    this.UnitPrice = UnitPrice;
    this.UnitsInStock = UnitsInStock;
    this.UnitsOnOrder = UnitsOnOrder;
    this.ReorderLevel = ReorderLevel;
    this.Discontinued = Discontinued;
  }
}
