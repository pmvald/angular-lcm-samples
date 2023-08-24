import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SubService3 {
  getMessage(): string {
    return '!';
  }
}
