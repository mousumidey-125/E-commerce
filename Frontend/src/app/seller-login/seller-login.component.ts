import { Component } from '@angular/core';
import { ISeller } from '../_model/seller';
import { SellerServiceService } from '../_service/seller-service.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../_service/admin-service.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  showmsg: boolean = false
  showerror: boolean = false
  constructor(public sellerObj: ISeller, public sellerServiceObj: SellerServiceService, public routerObj: Router, public adminServiceObj: AdminServiceService) { }

  onLogin() {
    this.sellerServiceObj.sellerLogin(this.sellerObj).subscribe((res: any) => {
      if (res.length > 0) {
        sessionStorage.setItem("sellertype", "SELLER")
        sessionStorage.setItem("sellername", res[0].sellerName)
        sessionStorage.setItem("selleremail", res[0].sellerEmail)
        sessionStorage.setItem("status", res[0].status)
        //sessionStorage.setItem("sellerphone", res[0].sellerPhone)
        //sessionStorage.setItem("selleraddress", res[0].sellerAddress)
        sessionStorage.setItem("sellerdetails", JSON.stringify(res[0]))

        this.showmsg = true
        this.showerror = false
        if ((sessionStorage.getItem("status")) === "false") {
          this.routerObj.navigate(['/inActive'])

        }
        else {
          setTimeout(() => {
            this.routerObj.navigate(['/sellerdashboard']);
          },
            1000);
        }


      }
      else {
        this.showerror = true
        this.showmsg = false
      }
    })

  }
}
