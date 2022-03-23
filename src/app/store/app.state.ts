 import { UserState } from "../interfaces/user.interface";
 import { storeUserReduceer } from "./auth/user.reducer";
import { ActionReducerMap } from "@ngrx/store"

export const rootReducer = {};

export interface AppState {
  user:UserState;
};

export const reducers: ActionReducerMap<AppState, any> = {
  user: storeUserReduceer
};