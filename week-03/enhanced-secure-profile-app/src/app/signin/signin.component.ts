import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin(): void {
    // alert('User signed in');
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
