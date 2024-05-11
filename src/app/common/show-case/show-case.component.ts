import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-show-case',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    ></ng-container>
    @for(source of sources; track source){
    <p>{{ source }}</p>
    }`,
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
  cmpCode: string = '';
  @Input()
  sources: string[] = [];
}
