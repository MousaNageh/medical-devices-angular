import { UserState } from "src/app/interfaces/user.interface";
import * as userActions from "./user.action";

export let userInitstate!:UserState ;
let user = localStorage.getItem("user") ;


if (user){
  userInitstate = JSON.parse(user);
}

export function userReduceer(
  userState:UserState=userInitstate,
  action:userActions.UserActionsTypes):any
  {
  switch (action.type){
    case userActions.STORE_USER:
      userState = action.user ;
      return userState ;
      default :
        return userState;
    }
  }