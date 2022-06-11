/*
 * Title: composer-list.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/11
 * Description: Composer list component
 */

import { Component, OnInit } from '@angular/core';
import { Composer } from '../composer.class';
import { IComposer } from '../composer.interface';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.scss'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
