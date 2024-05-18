import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThreeJsExampleComponent } from '../../../common/three-js/three-js-example.component';

@Component({
  selector: 'app-three-js-page',
  standalone: true,
  imports: [CommonModule, ThreeJsExampleComponent],
  template: `<app-three-js-example></app-three-js-example>`,
  styleUrl: './three-js-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeJsPageComponent {}
