import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Registration } from 'src/models/registration.model';
import { Flightex } from 'src/models/flightex.model';

@Injectable()
export class RegistrationService{
    reg:any;
    result:string;
    flight:Flightex;
    constructor(private myHttp:HttpClient){
        this.reg=[];
        
    }
 //  addUser(register:Registration){

//      this.result="already existing";
//      this.myHttp.post("https://localhost:44367/api/Register",register)
       
//     .subscribe(res=>{
//         console.log(res);
//     })

//  }

 
 addUser(reg:Registration){

    // const body:Registration={
    //     Firstname=reg.Firstname,
    //     Lastname=reg.Lastname,
    //     Email=reg.Email,
    //     Phonenumber=reg.Phonenumber,
    //     Dob=reg.Dob

    // }
    
   // console.log(reg);
    var reqHeader=new HttpHeaders({'No-Auth':'True'});
    return this.myHttp.post("https://localhost:44381/api/auth/Register",reg,{headers:reqHeader});

//     this.result="already existing";
//     this.myHttp.post("https://localhost:44381/api/Registration",reg).subscribe(res=>{
//        console.log(res);
//    })


}





update(val:string):Observable<any>
    {
        //https://localhost:44381/Help/Api/GET-api-admin-getdetails_uid
        //https://localhost:44323/api/Updation?uid={uid}
        //var reqHeader=new HttpHeaders({'No-Auth':'True'});
    return this.myHttp.get("https://localhost:44381/api/admin/getdetails?uid="+val)
    //api/admin/getdetails?uid={uid}    
}
    

updated(flight:Flightex,value)
    {
     // debugger;
      
      // console.log(value);
    //  console.log(flight);      // console.log(this.fig);
      //https://localhost:44323/api/Updation/{id}
      return this.myHttp.put("https://localhost:44381/api/admin/updatedetails?id="+value,flight)
      
    }

}