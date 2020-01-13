import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { ChangePassword } from 'src/models/changePassword.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePass:ChangePassword
  token:string
  username:any
  myForm:FormGroup

  constructor(private userservice:UserService,private router:Router,private loginservice:LoginService) {
    this.changePass=new ChangePassword();
    this.myForm=new FormGroup({
      uname:new FormControl(null,[Validators.required]),
      upass:new FormControl(null,[Validators.required]),
      unewPass:new FormControl(null,[Validators.required])
      
    });
   }
   public get uname()
  {
    return this.myForm.get("uname");
  }
  public get upass()
  {
    return this.myForm.get("upass");
  }
  public get unewPass()
  {
    return this.myForm.get("unewPass");
  }

   changeUserPassword(){
     this.changePass.Username=this.uname.value;
     this.changePass.Password=this.upass.value;
     this.changePass.Newpassword=this.unewPass.value;
     console.log(this.changePass)
     this.userservice.changePassword(this.changePass).subscribe(res=>{
       console.log(res);
     })

   }
   
goToLogin() {
  // localStorage.removeItem('userToken');
  // localStorage.removeItem('value');
  
  this.router.navigateByUrl("/Home");
}
logOut() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('value');
  localStorage.removeItem('userRoles')
  localStorage.removeItem('useremail')

  this.router.navigateByUrl("/Home");
  window.location.reload();
}
userName() {
  this.token = localStorage.getItem('userToken');
  console.log(this.token)
  if (this.token != null) {
    this.loginservice.getUserClaims().subscribe((data: any) => {
      // console.log(data.Username);
      console.log(data);
      this.username = data.Firstname;
      //console.log(data.Firstname);
    })
  }

}
  ngOnInit() {
    this.userName();
    console.log(localStorage.getItem('userToken'))
  }

}
