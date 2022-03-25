import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable, switchMap } from 'rxjs';
import { UserState } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store<{user:UserState}>,private router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("user").pipe(map(user=>{
      console.log(user);
      if (user)
          return true ;
      return this.router.createUrlTree(["/"]);
    }));
  }
}



