import {Component, NgModule} from '@angular/core';

import {Sub} from './sub';
import {StubbedService} from './stubbed-service';

/** Test component */
@Component({
  standalone: true,
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  imports: [Sub],
})
export class Main {
  message = this.stubbedService.getMessage();

  constructor(
    private stubbedService: StubbedService) {}  
}
