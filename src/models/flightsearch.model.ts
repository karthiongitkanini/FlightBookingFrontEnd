export class FlightModel
{
    Arrivaltime:string;
    Departuretime:string;
    Fare:string;
    Flightid:string;
    Duration:string;
    Passengercount:number
    constructor(cArr?,cDep?,cFar?,cId?,cDur?,count?)
    {
        this.Arrivaltime= cArr;
        this.Departuretime = cDep;
        this.Duration = cDur;
        this.Fare = cFar;
        this.Flightid = cId;
        this.Passengercount=count;
    }
}