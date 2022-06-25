/*
 * Title: composer-details.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/11
 * Description: Composer details component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Composer } from '../composer.class';
import { IComposer } from '../composer.interface';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.scss'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
