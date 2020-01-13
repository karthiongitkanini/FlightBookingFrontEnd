
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'src/models/admin.model';

@Injectable()
export class AdminService{
    adm:any;

    constructor(private myHttp:HttpClient){
        this.adm=[];
        
    }

    addDetails(adm:Admin){
        return this.myHttp.post("https://localhost:44381/api/admin/adddetails",adm)
       
        
    }
}