import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  username:string
  cancelticket:any
  token:string
  result:boolean

  constructor(private myHttp:HttpClient,private router:Router,private loginservice:LoginService) { 
    this.username=localStorage.getItem("useremail")
    this.myHttp.get("https://localhost:44381/api/CancelTicket?Username="+this.username)
        .subscribe(res=>{
            this.cancelticket=res;
            if(this.cancelticket.length==0){
              this.result=true;
            }
       
        })
  }
getbookid(Bookid){

  console.log(Bookid);
  this.router.navigate(['cancellation',Bookid],{skipLocationChange:true});

}
goToHomePageWithIcons() {
  this.router.navigateByUrl("/homeicons");
}

goToHome() {
  
  this.router.navigateByUrl("/Home");
}
logOut() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('value');
  localStorage.removeItem('userRoles');
  localStorage.removeItem('useremail');
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
onClickBack(){
  this.router.navigateByUrl("/homeicons")
}
  ngOnInit() {
    this.userName();
    console.log(localStorage.getItem('userToken'))
  }

}
