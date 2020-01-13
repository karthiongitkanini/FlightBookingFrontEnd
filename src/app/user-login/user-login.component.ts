import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Login } from 'src/models/login.model';
import{AngularMaterialModule}from '../angular-material.module'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

 
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login:Login;
  result:string;
  res:string;
  constructor(private loginservice :LoginService,private router:Router,private toastr:ToastrService)//private router: Router
   {
      this.login=new Login();
      this.res="logged";
    }
// email: string;
// username:string;
// password: string;
// if(data.valueOf.toString()=="true".toString()){
//   console.log(data);
//    console.log(this.login.Email);
//    localStorage.setItem('email',this.login.Email);
 //  }
//  else{
 //  }
IsLoginError:Boolean
getUser(){
  //console.log(this.login)
  // if(this.login.Email=="admin@gmail.com" && this.login.Password=="admin1234")
  // {
  //   this.router.navigateByUrl("/firstpageofadmin");
  // }
  // else{ 
    this.loginservice.getUserDataFromAPI(this.login).subscribe((data:any)=>{
      //  console.log(data);
        localStorage.setItem('userToken',data.access_token);
        localStorage.setItem('userRoles',data.role);

        localStorage.setItem('useremail',this.login.Email);
       this.router.navigateByUrl('/Home'); 
       },(err:HttpErrorResponse)=>{
         if(err.status==400)
         {
           this.toastr.error("invalid username or password")
         }
        //this.IsLoginError=false;
      });
      
  // }
}
goToLogin(){
  this.router.navigateByUrl("/User");
}
goToRegister(){
  this.router.navigateByUrl("/register");
}
goToHome(){
  this.router.navigateByUrl("/Home");
}
  ngOnInit() {
  }
}
