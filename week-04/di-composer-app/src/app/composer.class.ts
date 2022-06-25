/*
 * Title: composer.class.ts
 * Author: David Rachwalik
 * Date: 2022/06/11
 * Description: Composer class
 */

import { IComposer } from './composer.interface';

export class Composer implements IComposer {
  composerId: number;
  fullName: string;
  genre: string;
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
