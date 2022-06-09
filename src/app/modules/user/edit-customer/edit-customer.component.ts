import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Customer } from 'src/app/models/customer.models';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
 import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm!: FormGroup;
  customer!:Customer;
  constructor(private _customerService:CustomerService) { }

  ngOnInit(): void {
      this.editCustomerForm=  new FormGroup({
      id:new FormControl(this._customerService.currentCustomer?.id),
      name:new FormControl(this._customerService.currentCustomer?.name),
      logo:new FormControl(this._customerService.currentCustomer?.logo),
      password:new FormControl(this._customerService.currentCustomer?.password),
      salt:new FormControl(this._customerService.currentCustomer?.salt),
      token:new FormControl(this._customerService.currentCustomer?.token),

    });
    
  }
  editCustomer(){
    this.customer=this.editCustomerForm.value;
    if (this.customer.id==0) 
        this._customerService.postCustomer(this.customer).subscribe(data=>alert(data+"postCustomer"))
    else
        this._customerService.putCustomer(this.customer.id,this.customer).subscribe(data=>alert(data+"putCustomer"))   
  }

}

