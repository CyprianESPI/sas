import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { snippetsRoutes } from '../../app.routes';
import { AnchorComponent } from '../../common/anchor/anchor.component';

@Component({
  selector: 'app-snippets-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent, RouterOutlet],
  template: `
    <h2>Snippets</h2>
    <ol>
      @for(route of codeSnippetsRoutes; track route){
      <li>
        <!-- Absolute links start with '/' -->
        <app-anchor
          [data]="{ content: route.path ?? '', path: route.path ?? '' }"
        ></app-anchor>
      </li>
      }
    </ol>
    <router-outlet></router-outlet>
  `,
  styleUrl: './snippets-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsPageComponent {
  codeSnippetsRoutes: Route[] = snippetsRoutes[0].children ?? [];
}
