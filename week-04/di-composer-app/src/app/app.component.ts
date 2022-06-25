/*
 * Title: app.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/25
 * Description: Main application component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
