import {Component, Input, NgModule} from '@angular/core';
import {StubbedService} from './stubbed-service';

class StubbedService2 {
  getMessage(): string {
    return 'Angular';
  }
}

@NgModule({
  providers: [
    {provide: StubbedService, useClass: StubbedService2}
  ],
})
export class SubModule {
}
