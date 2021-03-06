import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { SignupComponent } from './../auth/signup/signup.component';
import { LoginComponent } from './../auth/login/login.component';
import { TrainingComponent } from './../training/training.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
