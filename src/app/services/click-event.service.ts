import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickEventService {
  private _clickEventSource = new Subject<string>();
  clickEvent$ = this._clickEventSource.asObservable();

  emitClickEvent(value: string) {
    this._clickEventSource.next(value);
  }
}
