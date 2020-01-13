export class Preview{
    S_Id:string;
    Des_Id:string;
    Departire_Time:string;
    Arrival_Time:string;
    Booked_Date:string;
    Passenger:string;
    Fare:string;
    constructor(s_id?,des_id?,departire_time?,arrival_time?,booked_date?,passenger?,fare?){
        this.S_Id = s_id;
        this.Des_Id = des_id;
        this.Departire_Time = departire_time;
        this.Arrival_Time = arrival_time;
        this.Booked_Date = booked_date;
        this.Passenger = passenger;
        this.Fare = fare;
    }
}