

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delete } from 'src/models/delete.model';

@Injectable()

export class DeleteService{
    del:any;

    constructor(private myHttp:HttpClient){
                    this.del=[];
    }
    deleteDetails(del:Delete){
        return this.myHttp.delete("https://localhost:44381/api/admin/deletedetails?flightid="+del.Fd_Id);
      
    }
    fetchFlightId(doj,source,destination){
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.get("https://localhost:44381/api/Passenger?doj="+doj+"&source="+source+"&destination="+destination,{headers:reqHeader});
    }

} 