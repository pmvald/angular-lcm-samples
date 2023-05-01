import {Component, NgModule} from '@angular/core';

import {SubModule} from './sub';
import {StubbedService} from './stubbed-service';
import {InModuleService} from './in-module-service';

/** Test component */
@Component({
  standalone: true,
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  imports: [SubModule],
})
export class Main {
  message = `${this.inModuleService.getMessage()} ${this.stubbedService.getMessage()}!`;

  constructor(
    private stubbedService: StubbedService,
    private inModuleService: InModuleService) {}  
}
