import { Component } from '@angular/core';
import { IUser } from '../_model/user';
import { UserServiceService } from '../_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showmsg: boolean = false
  showerror: boolean = false

  constructor(public userObj: IUser, public userServiceObj: UserServiceService, public routerObj: Router) { }

  onLogin() {
    this.userServiceObj.userLogin(this.userObj).subscribe((res: any) => {
      console.log(res[0])
      if (res.length > 0) {
        sessionStorage.setItem("usertype", "USER")
        sessionStorage.setItem("username", res[0].userName)
        sessionStorage.setItem("useremail", res[0].userEmail)
        //sessionStorage.setItem("userphone", res[0].userPhone)
        //sessionStorage.setItem("useraddress", res[0].userAddress)
        sessionStorage.setItem("userdetails", JSON.stringify(res[0]))

        this.showmsg = true
        this.showerror = false

        setTimeout(() => {
          this.routerObj.navigate(['/userdashboard']);
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
