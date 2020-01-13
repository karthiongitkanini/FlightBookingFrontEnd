import { Component, OnInit, Inject } from '@angular/core';
import { Preview } from 'src/models/preview.model';
import { PreviewService } from 'src/services/preview.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  passengers:any
 
  constructor(private previewService:PreviewService,
    private myHttp:HttpClient, public router: Router,
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     this.previewService.getUserData().subscribe((data)=>
    {
      //console.log(data);
        this.passengers = data;
        //console.log(data);
    }); 

   }
  ngOnInit() {
  }

  goBackToDisplayPage(){
    this.router.navigateByUrl("/displayAfterBooknow");

  }
}
