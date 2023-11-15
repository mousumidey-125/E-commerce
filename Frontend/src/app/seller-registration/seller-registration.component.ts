import { Component } from '@angular/core';
import { ISeller } from '../_model/seller';
import { SellerServiceService } from '../_service/seller-service.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent {
  showmsg: boolean = false
  showerror: boolean = false
  constructor(public sellerObj:ISeller,public sellerServiceObj:SellerServiceService,public routerObj:Router){}

  onSubmit(){
    this.sellerObj.status=false
    this.sellerServiceObj.sellerSignUp(this.sellerObj).subscribe((res: any) => {
      if (res.length > 0) {
        this.sellerObj.sellerName = "";
        this.sellerObj.sellerEmail = "";
        this.sellerObj.sellerPhone = "";
        this.sellerObj.sellerPassword = "";
        this.sellerObj.sellerBrandName="";
        this.sellerObj.sellerAddress = "";
        this.showmsg = true
        this.showerror = false
        this.routerObj.navigate(['/inActive'])

      }
      else {
        this.showerror = true
        this.showmsg = false
      }

    })

  }
}
