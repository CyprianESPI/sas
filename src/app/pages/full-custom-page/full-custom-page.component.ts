import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>full-custom-page works!</p>`,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent { }
