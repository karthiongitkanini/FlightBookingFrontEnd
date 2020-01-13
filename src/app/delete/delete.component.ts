import { Component, OnInit } from '@angular/core';
import { Delete } from 'src/models/delete.model';
import { DeleteService } from 'src/services/delete.service';
import { HttpClient } from '@angular/common/http';
import { FlightService } from 'src/services/flight.sevice';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  del: Delete;
  result: string;
  ids: any;
  values: string;
  selectsource: string;
  selectdest: string;
  selectdate: string;
  place: any;
  sameSourceDest;

  constructor(private deleteservice: DeleteService, private myHttp: HttpClient, private flightService: FlightService) {
    this.del = new Delete();
    this.flightService.getAllPlacesFromAPI().subscribe(res => {
      this.place = res;
      // console.log(this.place);
    })
  }
  deleteFlightDetails() {
    // console.log(this.del);
    this.deleteservice.deleteDetails(this.del).subscribe((res: any) => {
      if (res == true) {
        this.result = "successfully deleted";
      }
      else {
        this.result = "Required fields cannot be empty";
      }
    })
  }
  changesource(event: any) {
    this.selectsource = event.target.value;
    this.showids();
  }
  changedestination(event: any) {
    if (this.selectsource == this.selectdest)
      this.sameSourceDest = "same";
    this.selectdest = event.target.value;
    this.showids();
  }
  changedate(event: any) {
    this.selectdate = event.target.value;
    this.showids();
  }
  showids() {
    if (this.selectsource != "" && this.selectdest != "" && this.selectdate != null) {
      // console.log(this.selectdate + " " + this.selectdest + " " + this.selectsource)
      this.deleteservice.fetchFlightId(this.selectdate, this.selectsource, this.selectdest).subscribe(res => {
        console.log(res)
        this.ids = res
      })
    }
  }
  ngOnInit() { }
}