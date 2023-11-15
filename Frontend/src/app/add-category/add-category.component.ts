import { Component } from '@angular/core';
import { ICategory } from '../_model/category';
import { AdminServiceService } from '../_service/admin-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  showmsg: boolean = false
  showerror: boolean = false
  categoryNotadded:boolean=false
  categoryList:ICategory[]=[]
  constructor(public categoryObj: ICategory,public adminServiceObj:AdminServiceService) { }
  ngOnInit(){
    this.adminServiceObj.getCategory().subscribe((res:any)=>{
      if(res.length>0){
        this.categoryList=res
        this.categoryNotadded=false
      }
      else{
        this.categoryNotadded=true
      }
      

    })
  }
  addCategory(){
    this.adminServiceObj.addCategory(this.categoryObj).subscribe((res:any)=>{
      if(res.length>0){
        this.categoryObj.categoryName="";
        this.showmsg=true
        this.showerror=false
        location.reload();

      }
      else{
        this.showmsg=false
        this.showerror=true
      }
    })

  }
}
