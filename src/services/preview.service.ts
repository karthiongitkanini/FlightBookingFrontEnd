import { Preview } from "../models/preview.model";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PreviewService{
    passengers:any;
    constructor(private myHttp:HttpClient){
        this.passengers=[];
    }
getUserData(){
    return this.myHttp.get("https://localhost:44381/api/Preview")
  }   
}