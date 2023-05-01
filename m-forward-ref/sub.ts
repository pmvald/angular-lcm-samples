import {Component, Input, NgModule, Directive} from '@angular/core';
import {GetMessage} from './get-message';

@Directive({
  selector: '[subDirective]',
})
export class Sub {
  constructor(private getMessage: GetMessage) {
    this.getMessage.setMessage();
  }
}

@NgModule({
  declarations: [Sub],
  exports: [Sub],
})
export class SubModule {
}
