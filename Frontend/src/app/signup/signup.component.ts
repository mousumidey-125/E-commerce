import { Component } from '@angular/core';
import { IUser } from '../_model/user';
import { UserServiceService } from '../_service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showmsg: boolean = false
  showerror: boolean = false

  constructor(public userObj: IUser, public userServiceObj: UserServiceService) { }
  onSubmit() {
    this.userServiceObj.userSignUp(this.userObj).subscribe((res: any) => {
      if (res.length > 0) {
        this.userObj.userName = "";
        this.userObj.userEmail = "";
        this.userObj.userPhone = "";
        this.userObj.userPassword = "";
        this.userObj.userAddress = "";
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
