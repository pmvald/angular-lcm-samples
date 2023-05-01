import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StubbedService {
  getMessage(): string {
    return 'Original!';
  }
}