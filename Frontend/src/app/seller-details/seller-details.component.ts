import { Component } from '@angular/core';
import { AdminServiceService } from '../_service/admin-service.service';
import { ISeller } from '../_model/seller';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent {
  sellerList: ISeller[] = []
  statusValue: boolean = false
  showPopup: boolean[] = []
  constructor(public adminServiceObj: AdminServiceService, public sellerObj: ISeller) { }
  ngOnInit() {
    this.adminServiceObj.getSellerDetails().subscribe((res: any) => {
      this.sellerList = res
    })
  }

  
  changeStatus(id: any) {
    console.log(id)
    this.showPopup[id]=true
    console.log(this.showPopup[id])

  }
  ok(seller:any,id:any){
    this.showPopup[id]=false
    seller.status = !seller.status
    this.adminServiceObj.statusUpdate(seller).subscribe((res: any) => {
      console.log(res)
    })
  }
  cancel(seller:any,id:any){
    this.showPopup[id]=false
    seller.status = seller.status
    this.adminServiceObj.statusUpdate(seller).subscribe((res: any) => {
      console.log(res)
    })
  }

}
