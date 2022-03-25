import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean = false ;
  constructor(private store:Store<{user:UserState}>) { }

  ngOnInit(): void {
    this.store.select("user").subscribe(user=>{
      if(user){
        this.isLogIn = true ;
      }
    })
  }
 

}
