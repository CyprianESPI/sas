import { Routes } from '@angular/router';
import { FullCustomPageComponent } from './pages/full-custom-page/full-custom-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const codeSnippetsRoutes: Routes = [
  { path: 'full-custom', component: FullCustomPageComponent },
];

export const routes: Routes = [
  ...codeSnippetsRoutes,
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
