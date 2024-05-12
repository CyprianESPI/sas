import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ButtonComponent } from '../button/button.component';
import { ISourceCode } from '../../models/i-source-code';
import { ShowCaseCodeComponent } from '../show-case-code/show-case-code.component';

@Component({
  selector: 'app-show-case',
  standalone: true,
  imports: [CommonModule, ShowCaseCodeComponent],
  template: `
    <ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    ></ng-container>
    <app-show-case-code [sources]="sources"></app-show-case-code>
  `,
  styleUrl: './show-case.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseComponent {
  @Input()
  cmp: IComponentData = {
    component: ButtonComponent,
    data: {},
  };
  @Input()
  sources: ISourceCode[] = [];
}
