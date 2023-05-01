import {Component, NgModule} from '@angular/core';

import {SubService} from './sub';
import Sub2 from './sub2';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  message = `${this.subService.getMessage()} ${this.subService2.getMessage()}!`;

  constructor(
    private subService: SubService,
    private subService2: Sub2.SubService) {}  
}

@NgModule({
  declarations: [Main],  
  exports: [Main],
})
export class MainModule {
}
