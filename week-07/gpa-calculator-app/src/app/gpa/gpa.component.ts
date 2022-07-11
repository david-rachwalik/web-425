/*
 * Title: gpa.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/03
 * Description: GPA component
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
