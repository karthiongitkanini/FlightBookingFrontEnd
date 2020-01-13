
export class CancelTicketDetails{
    Pnr:string;
    Bookid:number;
    TicketbookedOn:string;
    Bookeddate:string;
    Sid:string;
    Desid:string;
    Flightid:number;
    Status:string;
    Username:string;
    constructor(pnr?,bookid?,ticketbookedOn?,bookeddate?,sid?,desid?,flightid?,status?,username?){
        this.Pnr = pnr;
        this.Bookid = bookid;
        this.TicketbookedOn = ticketbookedOn;
        this.Bookeddate = bookeddate;
        this.Sid = sid;
        this.Desid = desid;
        this.Flightid = flightid;
        this.Status = status;
        this.Username = username;
    }
}