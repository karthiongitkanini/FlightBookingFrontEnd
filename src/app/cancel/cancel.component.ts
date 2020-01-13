import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Cancel } from 'src/models/cancel.model';
import { CancelService } from 'src/services/cance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
@Injectable()
export class CancelComponent implements OnInit {
passenger:string;
passengers:Cancel;
@Input() cancel:any;
form: FormGroup;
ordersData:any;
users:any

bookid:any;

constructor(private formBuilder: FormBuilder, public router: Router,private myActivateRoute:ActivatedRoute,
  private toastr:ToastrService,private myHttp:HttpClient,private cancelservice:CancelService) {
  this.form = this.formBuilder.group({
    orders: new FormArray([], minSelectedCheckboxes(1))
  });
  this.users=[];
}
onClickBack(){
  this.router.navigateByUrl("/cancelticket")
}
ngOnInit() {
  
if(!this.cancel){

  this.myActivateRoute.params.subscribe(p=>
    {
      this.bookid = p["Bookid"];
      console.log(this.bookid);
      this.getUserDataFromAPI(this.bookid);

    })
}
}
goToLogin(){
  localStorage.removeItem('userToken');
  this.router.navigateByUrl("/User");
}
goToHome(){
  this.router.navigateByUrl("/Home");
} 
getUserDataFromAPI(userid){
  this.myHttp.get("https://localhost:44381/api/Cancellation?User_Id="+userid).subscribe((data)=>{
   this.ordersData=data;
   //console.log(this.ordersData)
   this.addCheckboxes();
 });
//  console.log(this.users)
//   return this.users;
// return [ { "Username": "bhuvana", "Password": "123" },
//  { "Username": "charupriya", "Password": "15664" } ];
}


private addCheckboxes() {
  this.ordersData.forEach((o, i) => {
    const control = new FormControl(i === 0); // if first item set to true, else false
    (this.form.controls.orders as FormArray).push(control);
  });
}


submit()
{
  //console.log(this.ordersData);
  const selectedOrderIds = this.form.value.orders
    .map((v, i) => v ? this.ordersData[i].Ps_Id : null)
    .filter(v => v !== null);
 // console.log(selectedOrderIds);
  this.cancelservice.getUserToDelete(selectedOrderIds).subscribe((res:Boolean)=>{
    // console.log(Ps_Id);
   // console.log(data); 
   if(res==true)
      {
        this.toastr.success('Selected ticket has been cancelled successfully. Your amount will be refunded to your actual payment method.','Success');
      }
      
      else{
        this.toastr.info('Unable to delete a ticket','Failed');
      }       
});
  //this.getUserDataFromAPI(this.passenger);
  
}
}

function minSelectedCheckboxes(min = 1) {
const validator: ValidatorFn = (formArray: FormArray) => {
  const totalSelected = formArray.controls
    .map(control => control.value)
    .reduce((prev, next) => next ? prev + next : prev, 0);

  return totalSelected >= min ? null : { required: true };
};

return validator;

}

