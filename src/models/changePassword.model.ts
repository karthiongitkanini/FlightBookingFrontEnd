export class ChangePassword{
    Username:string;
    Newpassword:string;
    Password:string;
    constructor(email?,newPass?,oldPass?)
    {
        this.Username=email;
        this.Newpassword=newPass;
        this.Password=oldPass;
    }
}