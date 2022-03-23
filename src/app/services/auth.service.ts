import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { tap } from "rxjs";
import { UserState } from "../interfaces/user.interface";

@Injectable({
  providedIn:"root"
})
export class AuthService{
    constructor(private http:HttpClient){}
    
    login(data:{email:string,password:string}){
      return this.http.post<UserState>("auth/login",data)
      // .pipe(tap(res=>{
      //   console.log(res)
      // }))

    }
}