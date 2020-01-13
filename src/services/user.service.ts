

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from 'src/models/changePassword.model';

@Injectable()

export class UserService{
    changepass:any

    constructor(private myHttp:HttpClient){
        this.changepass=[];
                   
    }
    changePassword(changepass:ChangePassword){
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.put(" https://localhost:44381/api/Register/ChangePassword?pass="+changepass.Newpassword,changepass,{headers:reqHeader});
      
    }
    

} 