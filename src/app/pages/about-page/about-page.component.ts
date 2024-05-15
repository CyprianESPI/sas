import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>about-page works!</p>`,
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
