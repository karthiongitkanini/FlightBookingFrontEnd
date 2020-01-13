import { Component, OnInit } from '@angular/core';
import { PaymentCardDetails } from 'src/models/payment.model';
import { PaymentService } from 'src/services/payment.service';
import {ToastrService } from 'ngx-toastr';
import { Router, RouterOutlet } from '@angular/router';
import { PreviewService } from 'src/services/preview.service';
import { Preview } from 'src/models/preview.model';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html', 
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardDetail:PaymentCardDetails
  result:string
  preview:Preview
  previewdetail:any
  token:string;
  username:string
  month:number;
  year:number;
  constructor(private paymentService:PaymentService,private loginservice:LoginService,private previewService:PreviewService,private toastr:ToastrService,public router: Router) {
    this.cardDetail=new PaymentCardDetails();
    this.previewService.getUserData().subscribe(res=>{
      this.previewdetail=res
      console.log(this.previewdetail)
    })
   }
   prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  onClickBackFromPayment(){
    this.router.navigateByUrl("/addPassenger")
  }
  SaveData()
  { 
    debugger
    this.cardDetail.Paymenttype="Creditcard";
    this.month=parseInt(this.cardDetail.Expirationmonth)
    this.year=parseInt(this.cardDetail.Expirationyear)
    if(this.month>12)
    {
      this.toastr.info('Invalid month field','Failed');
    }
   if(!(this.year<2030&&this.year>2020))
    {
      this.toastr.info('Invalid year field','Failed');
    }
    if((this.month<12)&&(this.year<2030&&this.year>2020)){
    this.paymentService.addPayment(this.cardDetail).subscribe((res:boolean)=>{
      console.log(res);
      if(res==true) 
      {
   
          this.router.navigateByUrl("/success");
         this.toastr.success('Payment Successful','Success');
      }
      
      else{
        this.toastr.info('Please fill all fields correctly','Failed');
      }
    })
   }
  }
  goToLogin() {
    // localStorage.removeItem('userToken');
    // localStorage.removeItem('value');
    
    this.router.navigateByUrl("/User");
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
   
  goToRegister() {
    this.router.navigateByUrl("/homeicons");
  }
 
  goToCancel() {
    //cancellation
    this.router.navigateByUrl("/cancelticket");
  }
  goToLoginSignup() {
    this.router.navigateByUrl("/signlog");
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }
  goToHomePageWithIcons() {
    this.router.navigateByUrl("/homeicons");
  }
  changePassword()
  {
    this.router.navigate(['/changepassword']);

  }

  ngOnInit() {
    this.userName();
    console.log(localStorage.getItem('userToken'))
  }

}
