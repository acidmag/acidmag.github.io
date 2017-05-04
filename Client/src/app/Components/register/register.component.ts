import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../Services/validate.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name : this.name,
      email : this.email,
      username: this.username,
      password: this.password
    };
    // Validate user
    if (!this.validateService.validateRegister(user)) {
      console.log('not filled');
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      console.log('email messed up');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('User Registered');
        // this.router.navigate(['/login']);
      } else {
        console.log('User not registered');
        // this.router.navigate(['/register']);
      }
    });
  }

}
