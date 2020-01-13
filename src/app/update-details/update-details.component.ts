import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


import { FormGroup, FormControl } from '@angular/forms';

import { JsonPipe } from '@angular/common';

import { Flightex } from 'src/models/flightex.model';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  // constructor() { }


  
  count:number;
  flightlist:any;
  flight:Flightex;
  flightlistform:FormGroup;
  submitted=false;
  value:string;
  result:string;
  flightex:Flightex;
   constructor(private myActiveRoute:ActivatedRoute,private regservice:RegistrationService,private router:Router) { 
     this.flight=new Flightex();
     if(myActiveRoute.snapshot.paramMap.get('data')){
       this.flightlist=JSON.parse(myActiveRoute.snapshot.paramMap.get('data'));
       //console.log(this.flightlist);
       
     }
     //this.flight=this.loginservice.update(this.value);
     this.flightlistform=new FormGroup({
       flightid:new FormControl(),
       sourceid:new FormControl(),
       destination:new FormControl(),
       departure :new FormControl(),
       arrival :new FormControl(),
       duration:new FormControl(),
       fare:new FormControl(),
       datevalue:new FormControl()
     });
   }

  get f() { return this.flightlistform.controls;}
 
   Update(){
     this.submitted=true;
     if(this.flightlistform.invalid){
       return
     }
   
     
 
     if(this.flightlistform.valid){
      
          
       this.flight.Ft_id=this.flightlistform.value.flightid;
       //console.log(this.flight.Ft_id);
       this.flight.Source_id=this.flightlistform.value.sourceid;
       this.flight.Destination_id=this.flightlistform.value.destination;
       this.flight.Departure=this.flightlistform.value.departure;
       this.flight.Dateid=this.flightlistform.value.datevalue;
       this.flight.Arrival=this.flightlistform.value.arrival;
       this.flight.Duration=this.flightlistform.value.duration;
       this.flight.Fare=this.flightlistform.value.fare;
       // this.value=localStorage.getItem("id");
       this.value=localStorage.getItem("val");
       this.regservice.updated(this.flight,this.value).subscribe
       ((res:any)=>{
         
         if(res==true)
         {
           this.result="updated successfully";
         }
         else
         {
          this.result="something went wrong";
         }
        
       });
     }
   }
   
 
   goToadmin(){
     this.router.navigateByUrl('/firstpageofadmin')
   }
   ngOnInit() {
   //   var flightid;
   //   this.myActiveRoute.params.subscribe((p)=>{
   //     flightid=p["fid"];
   //     localStorage.setItem("id",flightid);
   //     this.loginservice.update(flightid).subscribe
   //     (res=>{
   //         this.flight=res;
           
   //         console.log(this.flight);
   //     })
     
   //    });
  }

}
