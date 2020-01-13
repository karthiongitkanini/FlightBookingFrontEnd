import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import{slider,fader} from './route-animations'
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
 function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slider]
  })
export class AppComponent {
  // this is for component transition animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  
  title = 'FlightBooking';
  val:string;
 
  public show: any = false;
   
  constructor(public dialog: MatDialog, public router: Router) {
   }
  ;
  goToCancel(){
    this.router.navigateByUrl("/cancellation");
  }
    
  goToHome(){
    this.router.navigateByUrl("/Home");
  } 
  closeNavbu()
  {
     closeNav();
  }
  openNavbu()
  {
    openNav();
  }
  //-----for popup component-----------
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {

  //     width: '800px',
  //     data: {myvar:"breeze airways from other comp!!"}

  //    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log( result)
  //   });
  // }
    ngOnInit(){ 
    }   
   
}
