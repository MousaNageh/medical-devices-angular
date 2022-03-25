import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { BehaviorSubject, tap } from "rxjs";
import { UserState } from "../interfaces/user.interface";
import { Store } from "@ngrx/store";
import * as UserActions from "../store/auth/user.action";

@Injectable({
  providedIn:"root"
})
export class AuthService{

    
    constructor(private http:HttpClient,private store:Store<{user:UserState}>){}
    
    login(data:{email:string,password:string}){
      return this.http.post<UserState>("auth/login",data)
      .pipe(tap(res=>{
        this.setTokens(res);
        this.store.dispatch(new UserActions.StoreUserAction(res));
      }))
    }
    
    getStoredTokens(){
      let user = localStorage.getItem("user")
      if (user)
        return JSON.parse(user)
      else 
      return null
    }
    setTokens(user:UserState){
      localStorage.setItem("user",JSON.stringify(user));
    }

}