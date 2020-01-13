import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-of-admin',
  templateUrl: './first-page-of-admin.component.html',
  styleUrls: ['./first-page-of-admin.component.css']
})
export class FirstPageOfAdminComponent implements OnInit {

  constructor(private router:Router) {
  }

 goToInsertion(){
   //console.log('clicked');
   this.router.navigateByUrl('/admin');
 }

 goToUpdate(){
   this.router.navigateByUrl('/get-details'); 
 }

 goToDelete(){
   this.router.navigateByUrl('/delete');
 }
 logOut() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('value');
  localStorage.removeItem('userRoles')
  localStorage.removeItem('useremail')

  this.router.navigateByUrl("/Home");
}
 
goToHome(){
  this.router.navigateByUrl("/homeicons");
}

  ngOnInit() {
    this.router.navigateByUrl("/firstpageofadmin/delete")

  }

}
