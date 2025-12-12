import { Routes } from '@angular/router';

import { PageNotFound } from '../components/page-not-found/page-not-found';
import { Task } from '../components/task/task';


export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }, 
  { path:'tasks', component:Task},
  { path: '**', component: PageNotFound },
];
