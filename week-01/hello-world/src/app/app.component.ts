/*
 * Title: app.component.ts
 * Author: David Rachwalik
 * Date: 2022/05/29
 * Description: Main application component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myWorld = "You are now in Rachwalik' world!!";
}
