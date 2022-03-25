import { TokensState } from "src/app/interfaces/user.interface";
import * as userActions from "./user.action";

export let tokensInit!:TokensState ;
let tokens = localStorage.getItem("tokens") ;


if (tokens){
  tokensInit = JSON.parse(tokens);
}

export function tokenReduceer(
  tokenState:TokensState=tokensInit,
  action:userActions.UserActionsTypes):any
  {
  switch (action.type){
    case userActions.STORE_USER_TOKEN:
      tokenState = action.tokens ;
      return tokenState
      default :
        return tokenState
    }
  }