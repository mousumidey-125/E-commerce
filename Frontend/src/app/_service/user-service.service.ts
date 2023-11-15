import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IUser } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public httpClientObj:HttpClient) { }
  baseUrl="http://localhost:5000/user"

  userSignUp(user:IUser){
    let url=this.baseUrl+"/userreg";
    return this.httpClientObj.post(url,user)
  }

  userLogin(user:IUser){
    let url=this.baseUrl+"/userlogin";
    return this.httpClientObj.post(url,user)
  }
}
