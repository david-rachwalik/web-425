/*
 * Title: app.module.ts
 * Author: David Rachwalik
 * Date: 2022/07/10
 * Description: App module
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { GpaComponent } from './gpa/gpa.component';
import { GradeSummaryComponent } from './grade-summary/grade-summary.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BaseLayoutComponent,
    NotFoundComponent,
    HomeComponent,
    GpaComponent,
    GradeSummaryComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
