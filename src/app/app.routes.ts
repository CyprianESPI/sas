import { Routes } from '@angular/router';
import { FullCustomPageComponent } from './pages/full-custom-page/full-custom-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ToolbarPageComponent } from './pages/toolbar-page/toolbar-page.component';

export const codeSnippetsRoutes: Routes = [
  { path: 'full-custom', component: FullCustomPageComponent },
  { path: 'card', component: CardPageComponent },
  { path: 'toolbar', component: ToolbarPageComponent },
];

export const routes: Routes = [
  ...codeSnippetsRoutes,
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
