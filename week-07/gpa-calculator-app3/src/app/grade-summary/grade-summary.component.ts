/*
 * Title: grade-summary.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/03
 * Description: Grade summary component
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
