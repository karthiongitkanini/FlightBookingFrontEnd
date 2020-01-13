
export class BookedDetails{
    Pnr:string;
    TicketbookedOn:string;
    Bookeddate:string;
    Sid:string;
    Desid:string;
    Flightid:number;
    Status:string;
    Username:string;
    constructor(pnr?,ticketbookedon?,bookeddate?,sid?,desid?,flightid?,status?,username?){
        this.Pnr = pnr;
        this.TicketbookedOn = ticketbookedon;
        this.Bookeddate = bookeddate;
        this.Sid = sid;
        this.Desid = desid;
        this.Flightid = flightid;
        this.Status = status;
        this.Username = username;
    }
}