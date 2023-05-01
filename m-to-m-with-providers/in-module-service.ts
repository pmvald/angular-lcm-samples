import {Injectable} from '@angular/core';
import {SubModule} from './sub';

@Injectable({providedIn: SubModule})
export class InModuleService {
  getMessage(): string {
    return 'Hello';
  }
}