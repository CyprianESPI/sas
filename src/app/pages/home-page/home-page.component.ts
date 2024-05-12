import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { codeSnippetsRoutes } from '../../app.routes';
import { AnchorComponent } from '../../common/anchor/anchor.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent],
  template: `
    <h2>Welcome</h2>
    <ol>
      @for(route of codeSnippetsRoutes; track route){
      <li>
        <!-- Absolute links start with '/' -->
        <app-anchor
          [data]="{ content: route.path ?? '', path: '/' + route.path }"
        ></app-anchor>
      </li>
      }
    </ol>
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  codeSnippetsRoutes: Route[] = codeSnippetsRoutes;
}
