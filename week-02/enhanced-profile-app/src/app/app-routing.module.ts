/*
 * Title: app-routing.module.ts
 * Author: David Rachwalik
 * Date: 2022/06/05
 * Description: Main routing module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
