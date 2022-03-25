import { Action } from "@ngrx/store";
import { TokensState, UserState } from "src/app/interfaces/user.interface";

export const STORE_USER ="STORE_USER"
export const STORE_USER_TOKEN ="STORE_USER_TOKEN"

export class StoreUserAction implements Action{
  readonly type = STORE_USER;
  constructor(public user:UserState){};
}

export class StoreUserTokens implements Action{
  readonly type = STORE_USER_TOKEN;
  constructor(public tokens:TokensState){}
  
}

export type UserActionsTypes = StoreUserAction | StoreUserTokens ;