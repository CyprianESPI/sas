import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { snippetsRoutes } from '../../app.routes';
import { AnchorComponent } from '../../common/anchor/anchor.component';
import { UrlEndPipe } from '../../pipes/url-end.pipe';

@Component({
  selector: 'app-snippets-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent, RouterOutlet],
  template: `
    <h2 style="text-transform: capitalize;">{{ urlEnd }}</h2>
    @if(urlEnd === codeSnippetsPath){
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
    }
    <router-outlet></router-outlet>
  `,
  styleUrl: './snippets-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsPageComponent {
  codeSnippetsPath = snippetsRoutes[0].path ?? '';
  codeSnippetsRoutes: Route[] = snippetsRoutes[0].children ?? [];
  urlEnd: string = '';

  constructor(private _cd: ChangeDetectorRef, private _router: Router) {
    const getUrlEndPipe = new UrlEndPipe();
    this._router.events.subscribe({
      next: (value) => {
        this.urlEnd = getUrlEndPipe.transform(this._router.url);
        this._cd.markForCheck();
      },
    });
  }
}
