
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedDetails } from '../models/booked.model';

@Injectable()
export class BookedDetailsService{
    bookeddetails:any;
    constructor(private myHttp:HttpClient){
        this.bookeddetails=new BookedDetails();
    }
    getUserDataFromAPI(username:any):any
    {
        
        return this.myHttp.get("https://localhost:44381/api/BookingDetails?Username="+username)
        .subscribe(res=>{
           // console.log(res);
        })
      
    }
    
}