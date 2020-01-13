import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightModel } from 'src/models/flightsearch.model';
import { Fly } from 'src/models/fly.model';
import{ HttpHeaders} from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class FlightService {
    places: any;
    f: any;
    dflight: FlightModel[];
    constructor(private myHttp: HttpClient) {
        this.places = [];
    }

    getAllPlacesFromAPI() {
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.get("https://localhost:44381/api/Getdetails",{headers:reqHeader});
    }
    // getPlaces():string[]{
    //     this.getAllPlacesFromAPI().subscribe((data)=>{
    //         //console.log(data)
    //         this.places=data;
    //     });

    //return this.places;
    //}
    getPrice(Date,Source,Destination,temp){
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.get("https://localhost:44381/api/Values?date="+Date+"&source="+Source+"&destination="+Destination+"&temp="+temp,{headers:reqHeader})
    }

    httpRequest(date, source, destination): Observable<any> {
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.get("https://localhost:44381/api/Viewdetails?date=" + date + "&source=" + source +
            "&destination=" + destination,{headers:reqHeader})
            
    }

    httpPost(fly, fly1) {
        debugger;
        // console.log(fly);
        //console.log(fly1);
        this.myHttp.post("https://localhost:44381/api/SearchFlight?value=" + fly + "&value1=" + fly1, this.f).subscribe(res => {
            // console.log(res);
        });
    }
} 