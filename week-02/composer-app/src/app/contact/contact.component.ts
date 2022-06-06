/*
 * Title: contact.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/05
 * Description: Contact component
 */

import { Component, OnInit } from '@angular/core';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faLocationArrow = faLocationArrow;
  faPhone = faPhone;

  constructor() {}

  ngOnInit(): void {}
}
