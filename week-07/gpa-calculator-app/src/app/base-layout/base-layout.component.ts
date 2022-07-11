/*
 * Title: base-layout.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/10
 * Description: Base-layout component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {}

  signOut(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
