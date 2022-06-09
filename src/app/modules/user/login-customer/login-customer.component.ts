import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerLoginDTO } from 'src/app/models/CustomerLoginDTO';
import { UserLoginDTO } from 'src/app/models/userLoginDTO.models';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditCustomerComponent} from 'src/app/modules/user/edit-customer/edit-customer.component';
import{MatIcon} from  '@angular/material/icon';
@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginCustomerForm!: FormGroup;
  customerLoginDTO! :CustomerLoginDTO;

  constructor(private _customerService:CustomerService,public dialog: MatDialog) { 
     
  }

 ngOnInit(): void {
    this.loginCustomerForm=  new FormGroup({
    name:new FormControl(""),
    password:new FormControl(""),
  });
 }
 openDialog() {
  const dialogRef = this.dialog.open(EditCustomerComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


  login(){
     this.customerLoginDTO=this.loginCustomerForm.value; 
     this._customerService.Login(this.customerLoginDTO);
    //  .subscribe(data=>alert(`hellow to ${data.name}`))
   }
}