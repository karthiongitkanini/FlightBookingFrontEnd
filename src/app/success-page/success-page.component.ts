import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var simulate:any;
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  constructor(private router:Router) { }

  goToLogin(){
    localStorage.removeItem('userToken');
    this.router.navigateByUrl("/User");
  }
  goToHome(){
    this.router.navigateByUrl("/Home");
  } 
  ngOnInit() {
    simulate();
  }

}
