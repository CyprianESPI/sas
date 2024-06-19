import { Routes } from '@angular/router';
import { FullCustomPageComponent } from './pages/snippets/full-custom-page/full-custom-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPageComponent } from './pages/snippets/card-page/card-page.component';
import { ToolbarPageComponent } from './pages/snippets/toolbar-page/toolbar-page.component';
import { ButtonPageComponent } from './pages/snippets/button-page/button-page.component';
import { AnchorPageComponent } from './pages/snippets/anchor-page/anchor-page.component';
import { NgContainerPageComponent } from './pages/snippets/ng-container-page/ng-container-page.component';
import { NgContainerSearchablePageComponent } from './pages/snippets/ng-container-searchable-page/ng-container-searchable-page.component';
import { SnippetsPageComponent } from './pages/snippets-page/snippets-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CanvasPolygonPageComponent } from './pages/snippets/canvas-polygon-page/canvas-polygon-page.component';
import { SvgPolygonPageComponent } from './pages/snippets/svg-polygon-page/svg-polygon-page.component';
import { ThreeJsPageComponent } from './pages/snippets/three-js-page/three-js-page.component';
import { CircularRangeInputPageComponent } from './pages/snippets/circular-range-input-page/circular-range-input-page.component';

export const aboutRoutes: Routes = [
  { path: 'about', component: AboutPageComponent, title: 'SAS | About' },
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
      { path: 'canvas-polygon', component: CanvasPolygonPageComponent },
      { path: 'svg-polygon', component: SvgPolygonPageComponent },
      { path: 'three-js', component: ThreeJsPageComponent },
      { path: 'full-custom', component: FullCustomPageComponent },
      {
        path: 'circular-range-input',
        component: CircularRangeInputPageComponent,
      },
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
