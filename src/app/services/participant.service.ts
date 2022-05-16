import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Participant } from "../models/participant.models"; 
@Injectable()

export class ParticipantService{
    
    constructor(private _http:HttpClient) {
      
    }
getParticipantList():Observable<Participant[]>{
    return this._http.get<Participant[]>("api/participant");
}
getParticipantById(id:number):Observable<Participant>{
    return this._http.get<Participant>("api/participant/"+id);
}
postParticipant(participant:Participant){
    return this._http.post("api/participant/",participant);
}
putParticipant(id:number,participant:Participant){
    return this._http.put("api/participant/"+id,participant);
}

deleteParticipant(id:number){
    return this._http.delete("api/participant/"+id);
}
}

