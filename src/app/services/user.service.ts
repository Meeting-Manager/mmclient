import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { User } from "../models/user.models";
import { UserLoginDTO } from "../models/userLoginDTO.models";
import { UserDTO } from "../models/userDTO.models";

@Injectable()
export class UserService{
    currentUser!:User;
    constructor(private _http:HttpClient) {
      
    }

getUserById(customerId:number):Observable<UserDTO[]>{
    return this._http.get<UserDTO[]>("api/user/"+customerId);
}


Login(userLoginDTO:UserLoginDTO){
    
     this._http.post<User>("api/user/login/",userLoginDTO).subscribe(d=>{
        this.currentUser=d
        if(d==null)
        alert("d is null")
        else
        alert(`hellow to ${d.name} user`)});
}

GetUserByFilter(user:User){
    return this._http.post("api/user/",user);
}


postUser(user:User):Observable<User[]>{
    return this._http.post<User[]>("api/user/",user);
}
putUser(id:number,user:User){
    return this._http.put("api/user/"+id,user);
}

deleteUser(id:number){
    return this._http.delete("api/user/"+id);
}
}








