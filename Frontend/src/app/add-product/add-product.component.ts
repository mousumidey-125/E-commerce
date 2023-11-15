import { Component } from '@angular/core';
import { ICategory } from '../_model/category';
import { AdminServiceService } from '../_service/admin-service.service';
import { IProduct } from '../_model/product';
import { SellerServiceService } from '../_service/seller-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  categoryList:ICategory[]=[]
  productList:any[]=[]
  uploadedImage:any
  
constructor(public http:HttpClient,public categoryObj: ICategory,public adminServiceObj:AdminServiceService,public product:IProduct,public sellerServiceObj:SellerServiceService){}
ngOnInit(){
  this.adminServiceObj.getCategory().subscribe((res:any)=>{
      this.categoryList=res  
  })

  this.sellerServiceObj.getImage().subscribe((res:any)=>{
    console.log(res)
    this.productList=res
    
  })
}

onSelected(){
  this.product.sellerName="yg",
  this.product.sellerEmail="ygggg",
  this.product.sellerPhone="yg",
  this.product.sellerBrandName="yg",
this.sellerServiceObj.addProduct(this.product).subscribe((res:any)=>{
  console.log(res)
  this.productList=res
})
}


onChange(event :any){
console.log(event.target.files[0])
 this.uploadedImage=event.target.files[0]
}

upload(){
  const formdata=new FormData()
  formdata.append("image",this.uploadedImage);
  this.sellerServiceObj.uploadimg(this.product.productImage).subscribe((res:any)=>{
    console.log("uploaded")
    console.log(res)
  })
  }
}

