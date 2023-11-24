import {Injectable} from '@angular/core';

/*export namespace Nested {
  @Injectable({providedIn: 'root'})
  class SubService4 {
    getMessage(): string {
      return '!';
    }
  }
}*/

@Injectable({providedIn: 'root'})
export default class SubService4 {
  getMessage(): string {
    return '!';
  }
}

