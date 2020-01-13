import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookedDetailsService } from 'src/services/booked.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booked-details',
  templateUrl: './booked-details.component.html',
  styleUrls: ['./booked-details.component.css']
})
export class BookedDetailsComponent implements OnInit {

username:string
bookeddetails:any
result:string
  constructor(private bookedDetails:BookedDetailsService,private myHttp:HttpClient,private router:Router) {
      // this.bookeddetails = this.bookedDetails.getUserDataFromAPI(this.username);
      // console.log(this.bookeddetails);
      this.username=localStorage.getItem('useremail');
      this.myHttp.get("https://localhost:44381/api/BookingDetails?Username="+this.username)
        .subscribe((res)=>{
            console.log(res);
            this.bookeddetails=res;
            if(this.bookeddetails.length==0)
            this.result="You Don't have any Previous bookings!!!! Book Now ";
        })
   }
   
  
  goToLogin(){
    localStorage.removeItem('userToken');
    this.router.navigateByUrl("/User");
  }
  goToHome(){
    this.router.navigateByUrl("/Home");
  } 
  goToPreview(){
    this.router.navigateByUrl("/preview");
  }
  goToCancel()
  {
    //cancellation
    this.router.navigateByUrl("/cancellation");
  }
  onClickBack(){
    this.router.navigateByUrl("/homeicons");
  }
  

  ngOnInit() {
  }

}
