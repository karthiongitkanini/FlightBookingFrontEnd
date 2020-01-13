import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-homepage-with-icons',
  templateUrl: './homepage-with-icons.component.html',
  styleUrls: ['./homepage-with-icons.component.css']
})
export class HomepageWithIconsComponent implements OnInit {

  constructor(public router: Router,private loginService:LoginService) { }

  ngOnInit() {
  }
  goToSearch(){
    console.log('hi');
    this.router.navigateByUrl("/Home");

  }
  goToSearchPage(){
    this.router.navigateByUrl("/Home");
  }
  goToPreviewBookings(){ 
    this.router.navigateByUrl("/bookeddetails");

  }
  goToCancel(){
    this.router.navigateByUrl("/cancelticket");

  }
  goToLogin(){
    localStorage.removeItem('userToken');
    this.router.navigateByUrl("/User");
  }

  goToAdmin(){
   // debugger
    if(this.loginService.roleMatch(['Admin']))
    this.router.navigateByUrl("/firstpageofadmin");
    else
    {
      this.router.navigateByUrl("/forbidden");
    }
    

  }

}
