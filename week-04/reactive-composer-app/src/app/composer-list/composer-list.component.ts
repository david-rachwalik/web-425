/*
 * Title: composer-list.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/25
 * Description: Composer list component
 */

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.scss'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  filterComposers(name: string): void {
    alert(name);
  }
}
