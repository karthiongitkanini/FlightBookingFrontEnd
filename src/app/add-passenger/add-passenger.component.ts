import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Passenger } from 'src/models/passenger.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  PassengerDetailsForm: FormGroup;
  isSubmitted = false;
  result: string;
  passenger: Passenger
  pass: any
  passcount: string
  p: number;
  token:string;
  username:string;

  // Gender Names
  Gender: any = ['Male', 'Female', 'Other']
  // AllClassData = [
  //   {
  //     'Passenger': '1'
  //   },
  //    {    
  //     'Passenger':'2'    
  //    }
  // ]
  constructor(private fb: FormBuilder, private loginservice:LoginService,private myHttp: HttpClient,private router:Router, private toastr: ToastrService ) {

  }
  ngOnInit() {
    this.createform();
    this.userName();
    console.log(localStorage.getItem('userToken'))
  }

  createform() {
    this.passcount = localStorage.getItem("value");
    //console.log(this.passcount);
    this.p = parseInt(this.passcount)

    let arr = []

    for (let i = 0; i < this.p; i++) {
      arr.push(this.BuildFormDynamic(i))
    }
    this.PassengerDetailsForm = this.fb.group({
      PassengerDetails: this.fb.array(arr)
    })
    // PassengerDetails: this.fb.array(arr);


  }

  BuildFormDynamic(product): FormGroup {
    return this.fb.group({
      Passenger: [product.Passenger],
      Name: ['',Validators.required],
      Age: ['',Validators.required],
      Gender: ['',Validators.required],
    })
  }


  SaveData() {
    //pass this data to service and api node/webapi  
    this.isSubmitted = true;
    if (!this.PassengerDetailsForm.valid) {
      this.toastr.error('Invalid fields Try Again!!!', 'Failed');
      return false;
    } else {
      // alert(JSON.stringify(this.PassengerDetailsForm.value))
      this.PassengerDetailsForm.controls.PassengerDetails.value
      //console.log(this.PassengerDetailsForm.controls.PassengerDetails.value)
      this.pass = this.PassengerDetailsForm.controls.PassengerDetails.value
      this.myHttp.post("https://localhost:44381/api/passenger", this.pass).subscribe(res => {
        //console.log(res);
        if (res == true) {
          
          this.toastr.success('passengers details are added successfully!!!', 'Success');
          this.router.navigateByUrl('/payment')
        }
        this.result = "passengers details are added successfully!!!"
      })
    }

  }
  goToHome(){
    this.router.navigateByUrl("/Home");
  }
  logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('value');
    localStorage.removeItem('userRoles')
    localStorage.removeItem('useremail')

    this.router.navigateByUrl("/Home");
  }
  onClickBackFromAddPassenger(){
    this.router.navigateByUrl("/Home");
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
  
}
