import { Type } from '@angular/core';

export interface IComponent {
  component: Type<any>;
  inputs?: Record<string, any>;
}
