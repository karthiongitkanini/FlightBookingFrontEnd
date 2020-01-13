export class Cancel{
    User_Id:string;
    Ps_Id:string;
    Ps_Name:string;
    Ps_Age:string;
    Ps_Gender:string;
    constructor(user_id?,pid?,pname?,page?,pgender?){
        this.User_Id = user_id;
        this.Ps_Id = pid;
        this.Ps_Name = pname;
        this.Ps_Age = page;
        this.Ps_Gender = pgender;
    }
}