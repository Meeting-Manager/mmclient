import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerService } from 'src/app/services/customer.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RouterModule ,Routes} from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"login-user"},
  {path:"login-customer", component:LoginCustomerComponent},
  {path:"login-user", component:LoginUserComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    EditCustomerComponent,
    EditUserComponent,
    LoginCustomerComponent,
    LoginUserComponent
  ],
  providers:[UserService,CustomerService],
  imports: [
    CommonModule,MatDialogModule,ReactiveFormsModule,RouterModule,RouterModule.forRoot(routes)
  ],
  exports:[LoginComponent,EditCustomerComponent, EditUserComponent,RouterModule]
})
export class UserModule { }





