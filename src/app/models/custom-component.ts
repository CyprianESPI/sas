import { Type } from '@angular/core';

export interface CustomComponent {
  component: Type<any>;
  inputs?: Record<string, any>;
}
