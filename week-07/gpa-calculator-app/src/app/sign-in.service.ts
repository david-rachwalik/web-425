/*
 * Title: sign-in.service.ts
 * Author: David Rachwalik
 * Date: 2022/07/10
 * Description: Sign-in service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number): boolean {
    return this.studentIds.some((id) => id === studentId);
  }
}
