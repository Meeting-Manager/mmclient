import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserLoginDTO } from 'src/app/models/userLoginDTO.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginUserForm!: FormGroup;
  userLoginDTO! :UserLoginDTO;

  constructor(private _userService:UserService) { 
     
  }

 ngOnInit(): void {
    this.loginUserForm=  new FormGroup({
    customerName:new FormControl(""),
    name:new FormControl(""),
    password:new FormControl(""),
  });
 }
  login(){
     this.userLoginDTO=this.loginUserForm.value; 
     this._userService.Login(this.userLoginDTO);
     
   }
}
