export class PaymentCardDetails {
    Cardnumber: string;
    Cardholder: string;
    Expirationmonth: string;
    Expirationyear: string;
    Cvv: number;
    Paymenttype:string; 
constructor(cnum?,cholder?,exmonth?,exyear?,cvv?,p_type?)
{
    this.Cardnumber=cnum;
    this.Cardholder=cholder;
    this.Expirationmonth=exmonth;
    this.Expirationyear=exyear;
    this.Cvv=cvv;
    this.Paymenttype=p_type;
}
  }