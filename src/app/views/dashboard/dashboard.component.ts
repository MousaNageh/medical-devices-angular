import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private store:Store<UserState>) { }

  ngOnInit(): void {
   
  }
  

}
