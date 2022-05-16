import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDTO } from 'src/app/models/userLoginDTO.models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userLoginDTO! :UserLoginDTO;

  constructor(private _userService:UserService,private _router:Router) { 
     
  }

 ngOnInit(): void {
    this.loginForm=  new FormGroup({
    customerName:new FormControl(""),
    name:new FormControl(""),
    password:new FormControl(""),
  });
 }
  login(){
     this.userLoginDTO=this.loginForm.value; 
     this._userService.Login(this.userLoginDTO);
    //  .subscribe(data=>alert(`hellow to ${data.name}`))
   }

   onClickAdmin()
   {
      this._router.navigate(["/login-customer"])
   }
   onClickUser()
   {
    this._router.navigate(["/login-user"])
   }
 
}
