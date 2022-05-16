import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { File } from "../models/file.models"; 
@Injectable()
export class FileService{
    
    constructor(private _http:HttpClient) {
      
    }
getFileList():Observable<File[]>{
    return this._http.get<File[]>("api/file");
}
getFileById(id:number):Observable<File>{
    return this._http.get<File>("api/file/"+id);
}
postFile(file:File){
    return this._http.post("api/file/",file);
}
putFile(id:number,file:File){
    return this._http.put("api/file/"+id,file);
}

deleteFile(id:number){
    return this._http.delete("api/file/"+id);
}
}

