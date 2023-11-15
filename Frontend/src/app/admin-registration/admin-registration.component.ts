import { Component } from '@angular/core';
import { IAdmin } from '../_model/admin';
import { AdminServiceService } from '../_service/admin-service.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent {
  showmsg: boolean = false
  showerror: boolean = false
  constructor(public adminObj: IAdmin, public adminServiceObj: AdminServiceService) { }
  onSubmit() {
    this.adminServiceObj.adminSignUp(this.adminObj).subscribe((res: any) => {
      if (res.length > 0) {
        this.adminObj.adminName = "";
        this.adminObj.adminEmail = "";
        this.adminObj.adminPhone = "";
        this.adminObj.adminPassword = "";
        this.showmsg = true
        this.showerror = false
      }
      else {
        this.showerror = true
        this.showmsg = false
      }

    })

  }
}
