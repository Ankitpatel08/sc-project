import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  authForm : FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    this.isLoading = true;
    if(!this.authForm.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;

    const formData = this.authForm.value;

    if (this.isLoginMode) {
      authObs = this.authService.login(formData.email, formData.email);
    } else {
      authObs = this.authService.signUp(formData.email, formData.email);
    }

    authObs.subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      }, errorRes => {
        this.isLoading = false;
        this.error = errorRes;  
      });

    this.authForm.reset();
  }
}
