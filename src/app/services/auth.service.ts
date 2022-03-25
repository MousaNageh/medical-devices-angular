import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { BehaviorSubject, map, tap } from "rxjs";
import { TokensState, UserState } from "../interfaces/user.interface";
import { Store } from "@ngrx/store";
import * as UserActions from "../store/auth/user.action";

@Injectable({
  providedIn:"root"
})
export class AuthService{

    
    constructor(private http:HttpClient,private store:Store<{user:UserState,tokens:TokensState}>){}
    
    login(data:{email:string,password:string}){
      return this.http.post<{user:UserState,tokens:TokensState}>("auth/login",data)
      .pipe(
        tap(res=>{
        this.setTokens({user:res.user,tokens:res.tokens});
        this.store.dispatch(new UserActions.StoreUserAction(res.user));
        this.store.dispatch(new UserActions.StoreUserTokens(res.tokens));

      }))
    }
    
    getStoredTokens(){
      let user = localStorage.getItem("user")
      if (user)
        return JSON.parse(user)
      else 
      return null
    }
    setTokens(data:{user:UserState,tokens:TokensState}){
      localStorage.setItem("user",JSON.stringify(data.user));
      localStorage.setItem("tokens",JSON.stringify(data.tokens));
    }

}