export class Categories {
  CategoryID : Number ;
  CategoryName:  String;
  Description:String;
  Picture:String;
  
  constructor(){
    this.CategoryID = 0;
    this.CategoryName = "";
    this.Description = "";
    this.Picture = "";
  }

  setData(CategoryID,CategoryName,Description,Picture){
    this.CategoryID = CategoryID;
    this.CategoryName = CategoryName;
    this.Description = Description;
    this.Picture = Picture;
  }
}
