import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Meeting } from "../models/meeting.models"; 
@Injectable()

export class MeetingService{
    
    constructor(private _http:HttpClient) {
      
    }
getMeetingList():Observable<Meeting[]>{
    return this._http.get<Meeting[]>("api/meeting");
}
getMeetingByFileId(fileId:number):Observable<Meeting[]>{
    return this._http.get<Meeting[]>("api/meeting/"+fileId);
}
postMeeting(meeting:Meeting){
    return this._http.post("api/meeting/",meeting);
}
putMeeting(id:number,meeting:Meeting){
    return this._http.put("api/meeting/"+id,meeting);
}

deleteMeeting(id:number){
    return this._http.delete("api/meeting/"+id);
}
}

  



 

 

