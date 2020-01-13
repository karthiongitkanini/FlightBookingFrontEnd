import { Cancel } from '../models/cancel.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CancelService{
    passengers:any;
    constructor(private myHttp:HttpClient){
        
    }
    getUserDataFromAPI(userid:string):Observable<any>
    {
        
        return this.myHttp.get("https://localhost:44381/api/Cancel?User_Id="+userid);
      
    }
    
    getUserToDelete(Ps_Id:any)
    {
        //console.log(Ps_Id);
        var s=5;
       // https://localhost:44336/api/Cancel?Ps_Id=6
        //debugger;
        return this.myHttp.delete("https://localhost:44381/api/Cancellation?Ps_Id="+Ps_Id)
    }
    
}