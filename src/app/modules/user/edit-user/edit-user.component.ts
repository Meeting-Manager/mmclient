import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm!: FormGroup;
  user!:User;
  constructor(private _userService:UserService) {   }

  ngOnInit(): void {
    this.editUserForm=  new FormGroup({
           UserName:new FormControl(this._userService.currentUser?.name),
             Password:new FormControl(this._userService.currentUser?.password),
             Email:new FormControl(this._userService.currentUser?.email)
           });
  }
  editUser(){
    this.user=this.editUserForm.value;
    if(this.user.id==0)
      this._userService.postUser(this.user).subscribe(data=>alert(data+"postUser"))
    else
      this._userService.putUser(this.user.id,this.user).subscribe(data=>alert(data+"putUser"))

  }

}



