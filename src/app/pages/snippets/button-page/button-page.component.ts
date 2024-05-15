import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonComponent,
  ButtonData,
} from '../../../common/button/button.component';
import { IComponentData } from '../../../models/i-component';
import { ISourceCode } from '../../../models/i-source-code';
import { ShowCaseComponent } from '../../../common/show-case/show-case.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [CommonModule, ShowCaseComponent],
  template: `<app-show-case [cmp]="cmp" [sources]="sources"></app-show-case>`,
  styleUrl: './button-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPageComponent {
  cmp: IComponentData = ButtonComponent.Make({
    callBack: () => {
      // Update the inputs live
      const btnData: ButtonData = this.cmp.data as ButtonData;
      if (!btnData) return;
      this.count++;
      this.cmp.data = {
        ...btnData,
        content: `clickedMe ${this.count}`,
      };
    },
    content: 'clickMe',
    toolTip: 'helpMe',
  });
  count: number = 0;
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: `<app-button [data]="{ callBack: () => {
      // Update the inputs live
      const btnData: ButtonData = this.cmp.data as ButtonData;
      if (!btnData) return;
      this.count++;
      this.cmp.data = {
        ...btnData,
        content: clickedMe + this.count.toString(),
      };
    
      }, content: 'clickMe', toolTip: 'helpMe' }">
      </app-button>`,
    },
    {
      name: 'common/button/button.component.ts',
    },
    {
      name: 'common/button/button.component.scss',
    },
  ];
}
