import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {Sub} from './sub';
import {StubbedService} from './stubbed-service';

/** Test component */
@Component({
  standalone: true,
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  imports: [Sub],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Main {
  message = 'haha';//this.stubbedService.getMessage();

  //constructor(
    //private stubbedService: StubbedService) {}
}
