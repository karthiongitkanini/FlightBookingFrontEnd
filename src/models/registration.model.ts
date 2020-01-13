
export class Registration{
    Firstname:string;
    Lastname:string;
    Dob:Date;
    // Nationality:string;
    // Gender:string;
    Phonenumber:string;
    Username:string;
    Password:string;
    Roles:string[];

    constructor(fname?,lname?,dob?,phone?,email?,pass?)
    {
       this.Firstname=fname;
       this.Lastname=lname;
       this.Dob=dob;
       this.Phonenumber=phone;
       this.Username=email;
       this.Password=pass;
    }
    
}