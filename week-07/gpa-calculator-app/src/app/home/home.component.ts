/*
 * Title: home.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/10
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event): void {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value,
    });

    event.currentTarget.reset();
  }

  calculateResults(): void {
    let gpa = 0;

    for (const entry of this.transcriptEntries) {
      console.log(entry.grade);
      switch (entry.grade) {
        case 'A':
          console.log('its an a');
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  clearEntries(): void {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
