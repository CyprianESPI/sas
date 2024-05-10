import { Type } from '@angular/core';
import { ISearchable } from './i-searchable';

export interface IComponent {
  component: Type<any>;
  inputs?: Record<string, any>;
}

export interface IComponentData {
  component: Type<any>;
  data: object;
}

export interface IComponentDataSearchable extends IComponentData, ISearchable {}
