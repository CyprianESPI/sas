import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnchorComponent } from '../../common/anchor/anchor.component';
import { aboutRoutes, snippetsRoutes } from '../../app.routes';

interface FeaturedSnippet {
  path: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent],
  template: `
    <div class="hero">
      <h1>Smol Angular Snippets</h1>
      <p>Explore, learn, and share small but powerful Angular snippets.</p>
    </div>
    <div class="container">
      <section id="about">
        <h2>About Smol Angular Snippets</h2>
        <p>
          Smol Angular Snippets is a personal project dedicated to experimenting
          with Angular and showcasing various code snippets. The goal is to
          provide simple, reusable components that demonstrate the power and
          flexibility of Angular, all without relying on any UI frameworks.
        </p>
        <!-- Absolute links start with '/' -->
        <app-anchor
          [data]="{ content: 'Why SAS?', path: '/' + aboutRoute.path }"
        ></app-anchor>
      </section>
      <section id="featured">
        <h2>Featured Snippets</h2>
        <div class="snippets">
          @for(featuredSnippet of featuredSnippets; track featuredSnippet){
          <div class="snippet">
            <h3>{{ featuredSnippet.title }}</h3>
            <p>
              {{ featuredSnippet.content }}
            </p>
            <a [href]="featuredSnippet.path" class="btn">View Code</a>
          </div>
          }
        </div>
        <app-anchor
          [data]="{
            content: 'Explore More Components',
            path: '/' + snippetsRoute.path
          }"
        ></app-anchor>
      </section>
    </div>
    <div class="footer">
      <p>&copy; 2024 Smol Angular Snippets. All rights reserved.</p>
    </div>
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  aboutRoute = aboutRoutes[0];
  snippetsRoute = snippetsRoutes[0];

  featuredSnippets: FeaturedSnippet[] = [
    {
      title: 'Searchable NgContainer',
      content:
        'Use ngComponentOutlet to filter through a varied mix of components',
      path: '/snippets/ng-container-searchable',
    },
    {
      title: 'ThreeJS',
      content: 'Use ThreeJS library to display 3D geometry',
      path: '/snippets/three-js',
    },
    {
      title: 'Svg Polygon',
      content: 'Use native svg to display a resizeable polygon',
      path: '/snippets/svg-polygon',
    },
  ];
}
