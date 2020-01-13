export class Flightex{
    
    Ft_id:string;
    Fd_id:string;
    Source_id:string;
    Destination_id:string;
    Arrival:string;
    Dateid:string;
    Duration:string;
    Fare:string;
    Departure:string
    constructor(mftid?,mfd_id?,msource_id?,mdestination_id?,marrival?,mdateid?,mduration?,mfare?,mdeparture?)
    {
    this.Ft_id=mftid;
    this.Fd_id=mfd_id;
    this.Source_id=msource_id;
    this.Destination_id=mdestination_id;
    this.Arrival=marrival;
    this.Dateid=mdateid;
    this.Duration=mduration;
    this.Fare=mfare;
    this.Departure=mdeparture;
 } 
}