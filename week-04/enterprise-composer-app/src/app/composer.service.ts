/*
 * Title: composer.service.ts
 * Author: David Rachwalik
 * Date: 2022/06/25
 * Description: Composer service
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Ludwig van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
    ];
  }

  getComposers(): IComposer[] {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    for (const composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
