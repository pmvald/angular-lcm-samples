import {Component, Input, NgModule} from '@angular/core';
import {StubbedService} from './stubbed-service';

class StubbedService2 {
  getMessage(): string {
    return 'Angular!';
  }
}

@Component({
  standalone: true,
  selector: 'payam-sub',
  providers: [
    {provide: StubbedService, useClass: StubbedService2}
  ],
  template: '<span>{{message}}</span>',
})
export class Sub {
  message = this.stubbedService.getMessage();
  constructor(private stubbedService: StubbedService) {}
}
