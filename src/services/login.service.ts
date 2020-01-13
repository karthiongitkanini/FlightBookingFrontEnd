import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Login } from 'src/models/login.model';


@Injectable()
export class LoginService{


    login:any;
    constructor(private myHttp:HttpClient){
        this.login=[];

    }
    verifyEmail(value)
    {
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
      return this.myHttp.get("https://localhost:44381/api/Check?"+"umail="+value,{headers:reqHeader});
    }

    getUserDataFromAPI(login:Login){
       // console.log(login.Password);
        //return this.myHttp.get("https://localhost:44381//api/Login?email="+login.Email+"&upass="+login.Password);
        var data="username="+login.Email+"&password="+login.Password+"&grant_type=password";
        var reqHeader=new HttpHeaders({'Content-type':'application/x-WWW-urlencoded','No-Auth':'True'});
        return this.myHttp.post("https://localhost:44381/token",data,{headers:reqHeader});
    }
    getUserClaims()
    {
        return this.myHttp.get("https://localhost:44381/api/GetUserClaims");
    }
    // getUserData(login):Login[]{
    //     this.getUserDataFromAPI(login).subscribe((data)=>
    //     {
    //         console.log(data);
    //     this.login=data;
    // });
    // console.log(this.login)
    // return this.login;
    // }
roleMatch(allowedRoles):boolean{
    var isMatch=false;
    var userRoles:string[]=JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
        if(userRoles.indexOf(element)>-1){
            isMatch=true;
            return false;
        }
    });
return isMatch;
}


}