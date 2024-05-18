import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThreeJsComponent } from './three-js.component';

@Component({
  selector: 'app-three-js-example',
  standalone: true,
  imports: [CommonModule, ThreeJsComponent],
  template: `<app-three-js></app-three-js>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeJsExampleComponent {}
