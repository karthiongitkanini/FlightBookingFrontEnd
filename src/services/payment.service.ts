import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentCardDetails } from 'src/models/payment.model';
@Injectable()
export class PaymentService{
    payments:PaymentCardDetails[];
    constructor(private myHttp:HttpClient){
       this.payments=[];
    }
    // getPayment(pcardnumber:string):CardDetails{
    //     var payment:CardDetails=null;
    //     for(var i=0;i<this.payments.length;i++){
    //         if(this.payments[i].cardNumber==pcardnumber)
    //         {
    //             payment=this.payments[i];
    //             break; 
    //         }
    //     }
    //     return payment;
    // }
    // getPayments():CardDetails[]{
    //     return this.payments;
    // }
    addPayment(payment:PaymentCardDetails){
        // var added:boolean=true;
        // this.payments.forEach(element=>{
        //     if(element.Cardnumber==payment.Cardnumber)
        //     added=false;
        // });
        // if(added==true)
        //     this.payments.push(payment);
        //     this.myHttp.post("https://localhost:44381/api/payment",payment).subscribe((res)=>
        //     {
        //         console.log(res)
        //     });
        // return added;
        return  this.myHttp.post("https://localhost:44381/api/payment",payment)
    }
}