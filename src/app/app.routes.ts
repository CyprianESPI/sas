import { Routes } from '@angular/router';
import { FullCustomPageComponent } from './pages/full-custom-page/full-custom-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ToolbarPageComponent } from './pages/toolbar-page/toolbar-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';

export const codeSnippetsRoutes: Routes = [
  { path: 'button', component: ButtonPageComponent },
  { path: 'card', component: CardPageComponent },
  { path: 'toolbar', component: ToolbarPageComponent },
  { path: 'full-custom', component: FullCustomPageComponent },
];

export const homeRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'index', component: HomePageComponent },
  { path: 'index.html', component: HomePageComponent },
  { path: '', component: HomePageComponent },
];

export const routes: Routes = [
  ...codeSnippetsRoutes,
  ...homeRoutes,
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
