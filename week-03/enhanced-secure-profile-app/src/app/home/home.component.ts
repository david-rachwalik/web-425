/*
 * Title: home.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/11
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    // this.isLoggedIn = Boolean(
    //   this.route.snapshot.queryParamMap.get('isLoggedIn')
    // );
  }

  ngOnInit(): void {}
}
