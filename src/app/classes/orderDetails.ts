export class OrderDetails {
  OrderID : Number ;
  ProductID:  Number;
  UnitPrice:Number;
  Quantity:Number;
  Discount:Number;
  
  constructor(){
    this.OrderID = 0;
    this.ProductID = 0;
    this.UnitPrice = 0;
    this.Quantity = 0;
    this.Discount = 0;
  }

  setData(OrderID,ProductID,UnitPrice,Quantity,Discount){
    this.OrderID = OrderID;
    this.ProductID = ProductID;
    this.UnitPrice = UnitPrice;
    this.Quantity = Quantity;
    this.Discount = Discount;
  }
}
