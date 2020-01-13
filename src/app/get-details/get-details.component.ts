import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Flightex } from 'src/models/flightex.model';
import { RegistrationService } from 'src/services/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/services/flight.sevice';
import { DeleteService } from 'src/services/delete.service';
import { Delete } from 'src/models/delete.model';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  @Output() getdetails: Flightex;
  message: string;
  value: string;
  del:Delete;
  myForm: FormGroup;
  flight: Flightex;
  ids:any;
  values:string;
  selectsource:string;
  selectdest:string;
  selectdate:string;
  place:any;
  sameSourceDest;

  constructor(private formbuilder: FormBuilder,private flightService:FlightService,
    private deleteservice:DeleteService,
      private router: Router,
      private regservice: RegistrationService,
      private toastr: ToastrService) 
  {
    this.del=new Delete();
    this.flightService.getAllPlacesFromAPI().subscribe(res => {
      this.place = res;
    })
  }

  

  Send() {

    // if (this.myForm.valid) {

      localStorage.setItem("val", this.del.Fd_Id);
      this.regservice.update(this.del.Fd_Id).subscribe
        ((res: any) => {
          console.log(res)
          if (res == null) {
            this.value = "No data found";
            this.toastr.info('No data found', 'Failed');

          }
          else {
            this.flight = res;
            console.log(this.flight)
            this.router.navigate(['/update-details', { data: JSON.stringify(this.flight) }], { skipLocationChange: true });

          }

          //console.log(this.flight);

        }, (err: HttpErrorResponse) => {
          this.value = "Invalid id";
          this.toastr.info('Invalid id', 'Failed');
          console.log(this.value)
        });
    // }
  }
  changesource(event:any){

    this.selectsource=event.target.value;
    this.showids();
    
      }
      changedestination(event:any){
        if(this.selectsource==this.selectdest)
        this.sameSourceDest="same";

        this.selectdest=event.target.value;
        this.showids();
    
      }
      changedate(event:any){
        this.selectdate=event.target.value;
       this.showids();
    }
    
    showids(){
      if(this.selectsource!=""&&this.selectdest!=""&&this.selectdate!=null)
      {
        console.log(this.selectdate+" "+this.selectdest+" "+this.selectsource)
       this.deleteservice.fetchFlightId(this.selectdate,this.selectsource,this.selectdest).subscribe(res=>{
          console.log(res)
          this.ids=res
      })
      }
    }

  ngOnInit() {
  }

}
