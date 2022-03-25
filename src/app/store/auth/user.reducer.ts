import { UserState } from "src/app/interfaces/user.interface";
import * as userActions from "./user.action";

export let userInitstate!:UserState ;
let user = localStorage.getItem("user") ;


if (user){
  userInitstate = JSON.parse(user);
}

export function storeUserReduceer(
  state:UserState=userInitstate,
  action:userActions.StoreUserAction):any
  {
  switch (action.type){
    case userActions.STORE_USER:
      return {
        ...state,
        user:action.user
      }
    default :
        return state
    }
  }