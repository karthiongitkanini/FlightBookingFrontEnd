import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
myForm:FormGroup;
res:string;
public show:boolean;
  constructor(private formbuilder:FormBuilder,private loginservice:LoginService,private router:Router) {
    this.myForm=new FormGroup({
      uname:new FormControl(null,[Validators.required])
      
    });

   }
   public get uname()
  {
    return this.myForm.get("uname");
  }
  goToLogin(){
    this.router.navigateByUrl("/User");
  }
   Send()
  {
    this.show=!this.show;
   //console.log(this.uname.value);
   this.loginservice.verifyEmail(this.uname.value).subscribe((data:boolean)=>{
   // console.log(data)
    //this.res=data
     if(data==true)
     {
       this.res="sent";
      }
     else{
       this.res="email does not exist";
     }
    
   
  });
  }
  ngOnInit() {
  }

}



