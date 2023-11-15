import { Component } from '@angular/core';
import { IAdmin } from '../_model/admin';
import { AdminServiceService } from '../_service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  showmsg: boolean = false
  showerror: boolean = false
  constructor(public adminObj: IAdmin, public adminServiceObj: AdminServiceService,public routerObj:Router) { }
  onLogin() {
    this.adminServiceObj.adminLogin(this.adminObj).subscribe((res: any) => {
      console.log(res[0])
      if (res.length > 0) {
        sessionStorage.setItem("admintype", "ADMIN")
        sessionStorage.setItem("adminname", res[0].adminName)
        sessionStorage.setItem("adminemail", res[0].adminEmail)
        //sessionStorage.setItem("adminphone", res[0].adminPhone)
        sessionStorage.setItem("admindetails", JSON.stringify(res[0]))

        this.showmsg = true
        this.showerror = false

        setTimeout(() => {
          this.routerObj.navigate(['/admindashboard']);
        },
          1000);
      }
      else {
        this.showerror = true
        this.showmsg = false
      }
    })

  }
}
