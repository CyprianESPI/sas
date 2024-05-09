import { Type } from '@angular/core';

export interface ComponentData {
  component: Type<any>;
  inputs?: Record<string, any>;
}
