import { Routes } from '@angular/router';
import { FullCustomPageComponent } from './pages/full-custom-page/full-custom-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ToolbarPageComponent } from './pages/toolbar-page/toolbar-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { AnchorPageComponent } from './pages/anchor-page/anchor-page.component';
import { NgContainerPageComponent } from './pages/ng-container-page/ng-container-page.component';
import { NgContainerSearchablePageComponent } from './pages/ng-container-searchable-page/ng-container-searchable-page.component';
import { SnippetsPageComponent } from './pages/snippets-page/snippets-page.component';

export const aboutRoutes: Routes = [
  { path: 'about', component: HomePageComponent, title: 'SAS | About' },
];

export const snippetsRoutes: Routes = [
  {
    path: 'snippets',
    component: SnippetsPageComponent,
    title: 'SAS | Snippets',
    children: [
      { path: 'anchor', component: AnchorPageComponent },
      { path: 'button', component: ButtonPageComponent },
      { path: 'card', component: CardPageComponent },
      { path: 'toolbar', component: ToolbarPageComponent },
      { path: 'ng-container', component: NgContainerPageComponent },
      {
        path: 'ng-container-searchable',
        component: NgContainerSearchablePageComponent,
      },
      { path: 'full-custom', component: FullCustomPageComponent },
    ],
  },
];

export const homeRoutes: Routes = [
  { path: 'home', component: HomePageComponent, title: 'SAS | Home' },
];

export const routes: Routes = [
  ...snippetsRoutes,
  ...homeRoutes,
  ...aboutRoutes,
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
