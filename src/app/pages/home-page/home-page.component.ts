import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { codeSnippetsRoutes } from '../../app.routes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Welcome</h2>
    @for(route of codeSnippetsRoutes; track route){
    <!-- Absolute links start with '/' -->
    <a [routerLink]="'/' + route.path">{{ route.path }}</a>
    }
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  codeSnippetsRoutes: Route[] = codeSnippetsRoutes;
}
