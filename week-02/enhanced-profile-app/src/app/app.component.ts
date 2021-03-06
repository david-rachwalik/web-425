/*
 * Title: app.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/05
 * Description: Main application component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
