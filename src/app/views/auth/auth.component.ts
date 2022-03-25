import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from "../../store/auth/user.action";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  wrongEmailOrPass:boolean = false ;
  user!:Observable<UserState>;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSignInForm(signInForm:NgForm){
    if(signInForm.valid){
      this.auth.login(signInForm.value).subscribe(res=>{
        this.router.navigate(["/dashboard"]);
      },err=>{
        if(err.status==401)
          this.wrongEmailOrPass = true ;
      })
    }
  }


}
