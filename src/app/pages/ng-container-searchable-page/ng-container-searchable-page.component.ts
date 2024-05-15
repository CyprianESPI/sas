import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IComponentDataSearchable } from '../../models/i-component';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-ng-container-searchable-page',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  template: ` <input
      type="text"
      [(ngModel)]="searchText"
      (ngModelChange)="updateFilteredComponents()"
      placeholder="Search"
    />
    <h2>{{ filteredComponents.length }} components</h2>
    @for(cmp of filteredComponents; track cmp){
    <!-- Wrap into a div to ensure margin style is propagated -->
    <div class="wrapper">
      <ng-container
        *ngComponentOutlet="
          cmp.component;
          inputs: { data: cmp.data, searchText: searchText }
        "
      >
      </ng-container>
    </div>
    }`,
  styleUrl: './ng-container-searchable-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContainerSearchablePageComponent {
  components: IComponentDataSearchable[] = [
    CardComponent.Make({ title: '1st card', content: 'Some text' }),
    CardComponent.Make({ title: '2nd card', content: 'Even more text' }),
    CardComponent.Make({ title: '3rd card', content: 'blabla' }),
    CardComponent.Make({ title: '4th card', content: '...' }),
  ];
  filteredComponents: IComponentDataSearchable[] = this.components;

  searchText: string = '';

  updateFilteredComponents(): void {
    // Clear filter when empty text
    if (!this.searchText) {
      this.filteredComponents = this.components;
      return;
    }

    this.filteredComponents = this.components.filter((cmp) =>
      cmp.search(this.searchText)
    );
  }
}
