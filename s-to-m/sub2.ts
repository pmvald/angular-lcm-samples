import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export default class SubService2 {
  getMessage(): string {
    return 'Angular';
  }
}
