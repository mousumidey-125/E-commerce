import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public routerObj: Router) { }
  
  isUserLoggedIn(): boolean {
    return (sessionStorage.getItem("usertype") !== null);
}

isSellerLoggedIn():boolean
{
  return (sessionStorage.getItem("sellertype") !== null);
}
IsSellerStatus():boolean{
  return (sessionStorage.getItem("status") === "true");
}

isAdminLoggedIn():boolean
{
  return (sessionStorage.getItem("admintype") !== null);
}
  
  userLogout() {
    sessionStorage.removeItem('usertype')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('useremail')
    sessionStorage.removeItem('userdetails')
    sessionStorage.clear()

    this.routerObj.navigate(['/'])
  }

  sellerLogout(){
    sessionStorage.removeItem('sellertype')
    sessionStorage.removeItem('sellername')
    sessionStorage.removeItem('selleremail')
    sessionStorage.removeItem('sellerdetails')
    sessionStorage.clear()

    this.routerObj.navigate(['/'])
  }

  adminLogout(){
    sessionStorage.removeItem('admintype')
    sessionStorage.removeItem('adminname')
    sessionStorage.removeItem('adminemail')
    sessionStorage.removeItem('admindetails')
    sessionStorage.clear()

    this.routerObj.navigate(['/'])
  }
}
