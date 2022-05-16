import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Customer } from "../models/customer.models";
import { CustomerLoginDTO } from "../models/CustomerLoginDTO";
@Injectable()
export class CustomerService{
    currentCustomer?:Customer
    constructor(private _http:HttpClient) {
      this.currentCustomer=new Customer()
    }
getCustomerList():Observable<Customer[]>{
    return this._http.get<Customer[]>("api/customer");
}
getCustomerById(id:number){
    this._http.get<Customer>("api/customer/"+id).subscribe(d=>
        this.currentCustomer=d);
}
postCustomer(customer:Customer){
    return this._http.post("api/customer/",customer);
}
putCustomer(id:number,customer:Customer){
    return this._http.put("api/customer/"+id,customer);
}
Login(customerLoginDTO:CustomerLoginDTO){
    this._http.post<Customer>("api/customer/login/",customerLoginDTO).subscribe(d=>{
       this.currentCustomer=d
    //    if(d==null)
    //    alert("d is null")
    //    else
       alert(`hellow to ${d.name} customer`)});

}
}

