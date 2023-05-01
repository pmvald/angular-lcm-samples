import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export default class SubService {
  getMessage(): string {
    return 'Angular';
  }
}
