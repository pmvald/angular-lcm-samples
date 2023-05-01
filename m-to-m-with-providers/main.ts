import {Component, NgModule} from '@angular/core';

import {SubModule} from './sub';
import {StubbedService} from './stubbed-service';
import {InModuleService} from './in-module-service';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  message = `${this.inModuleService.getMessage()} ${this.stubbedService.getMessage()}!`;

  constructor(
    private stubbedService: StubbedService,
    private inModuleService: InModuleService) {}  
}

@NgModule({
  declarations: [Main],  
  exports: [Main],
  imports: [SubModule],
})
export class MainModule {
}
