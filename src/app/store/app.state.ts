 import { TokensState, UserState } from "../interfaces/user.interface";
 import { userReduceer } from "./auth/user.reducer";
import { ActionReducerMap } from "@ngrx/store"
import { tokenReduceer } from "./auth/token.reducer";


export const rootReducer = {};


export interface AppState {
  user:UserState;
  tokens:TokensState
};


export const reducers: ActionReducerMap<AppState, any> = {
  user: userReduceer,
  tokens:tokenReduceer
};