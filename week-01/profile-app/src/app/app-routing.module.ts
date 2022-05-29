/*
 * Title: app.module.ts
 * Author: David Rachwalik
 * Date: 2022/05/29
 * Description: Main application module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
