import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './common/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  subTitle = '';
  title = 'SAS';

  constructor(private _router: Router) {
    this._router.events.subscribe({
      next: (value) => {
        this.subTitle = this._router.url;
      },
    });
  }

  getRoutingCallBack(value: string) {
    return () => {
      this._router.navigate([value]);
    };
  }
}
