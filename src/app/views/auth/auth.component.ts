import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  wrongEmailOrPass:boolean = false ;
  user!:Observable<UserState>;
  constructor(private auth:AuthService,private store:Store<{user:UserState}>) { }

  ngOnInit(): void {
    this.user = this.store.select("user"); 
    this.user.subscribe(val=>{
      console.log(val);
    })
  }
  onSignInForm(signInForm:NgForm){
    if(signInForm.valid){
      this.auth.login(signInForm.value).subscribe(res=>{
        
        console.log(res);
      },err=>{
        if(err.status==401)
          this.wrongEmailOrPass = true ;
      })
    }
  }

}
