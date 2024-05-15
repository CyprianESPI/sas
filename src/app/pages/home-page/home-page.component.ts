import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnchorComponent } from '../../common/anchor/anchor.component';
import { aboutRoutes, snippetsRoutes } from '../../app.routes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent],
  template: `
    <h2>Smol Angular Snippets</h2>
    <p>Compact, Powerful Angular Components at Your Fingertips</p>
    <h3>
      Boost your Angular projects with our curated collection of easily
      integrable UI components.
    </h3>
    <!-- Absolute links start with '/' -->
    <app-anchor
      [data]="{ content: 'Explore Components', path: '/' + snippetsRoute.path }"
    ></app-anchor>
    <app-anchor
      [data]="{ content: 'Why SAS?', path: '/' + aboutRoute.path }"
    ></app-anchor>
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  aboutRoute = aboutRoutes[0];
  snippetsRoute = snippetsRoutes[0];
}
