import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TokensState, UserState } from 'src/app/interfaces/user.interface';
import { StoreUserTokens } from 'src/app/store/auth/user.action';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean = false ;
  constructor(private store:Store<{tokens:TokensState,user:UserState}>) { }

  ngOnInit(): void {
    this.store.select("tokens").subscribe(tokens=>{
      if(tokens){
        this.isLogIn = true ;
      }
    })
  }

}
