import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/models/admin.model';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adm:Admin;
  result:string;
  duration:any;
  departureTime:string;
  arrivalTime:string;
  // myform:FormGroup;
  // minDate=new Date(2019,11,1);
  // maxDate=new Date(2019,11,31);

  

  constructor( private adminservice:AdminService) {
     this.adm=new Admin();
    
    // this.myform = new FormGroup(
    //   {
    //     UserName:new FormGroup(null,Validators.required)
    //   })
   }
  //  public get UserName()
  //  {
  //    return this.myform.get("UserName");
  //  }
  changeDeparture(event){
    this.departureTime=event.target.value
     this.calculateDuration()

  }
  changeArrival(event){
this.arrivalTime=event.target.value
this.calculateDuration()
  }
  calculateDuration(){
    this.diff(this.departureTime,this.arrivalTime)
  }

  onSubmit(){


   

    // this.registerservice.addUser(this.register);
    // this.result="added";
    //this.choice=(this.adminservice.addDetails(this.adm));
         this.adminservice.addDetails(this.adm).subscribe((res:any)=>{
         // console.log(res);
          if(res==true)
          this.result="added";
          else
          this.result="fail";
      })
     
         
        // if(this.myform.valid)
        // {
        //   debugger;
        //   this.result = "success";
        //   console.log(this.result);
        // }
        // else{
        //   this.result="fail";
        //   console.log(this.result);

        // }  

  }
  removeColon(tr):number {
    if (tr.length == 4) {
      tr = tr.replace(":", "");
      console.log(tr)
      return parseInt(tr); 

    }


    if (tr.length == 5) {
      tr =tr.replace(":", "");
      console.log(tr)
      return parseInt(tr); 

    }

  }
// Main function which finds difference 
 diff(s1,s2)
{
debugger
  // change string (eg. 2:21 --> 221, 00:23 --> 23) 
  var time1:number = this.removeColon(s1);
  var time2:number = this.removeColon(s2);
  var startmin:number=time1%100;
  var endmin:number=time2%100
  var hr,min,hrdiff,mindiff;
 

  if(startmin>endmin)
  {
    hr=time2/100-1;
    min=endmin+60;
  }
  else if(startmin<endmin||startmin==0&&endmin==0){
    hr=time2/100;
    min=endmin;  
  }
  hrdiff=Math.floor(hr)-Math.floor(time1/100);
  mindiff=min-startmin;
  if(hrdiff<=0){
    hrdiff+=24
  }
  console.log(hrdiff+":"+mindiff)
  this.duration=hrdiff+":"+mindiff;

}


  ngOnInit() {
  }

}
