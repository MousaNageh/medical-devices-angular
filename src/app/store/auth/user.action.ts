import { Action } from "@ngrx/store";
import { UserState } from "src/app/interfaces/user.interface";

export const STORE_USER ="STORE_USER"

export class StoreUserAction implements Action{
  readonly type = STORE_USER;
  user!: UserState;
}