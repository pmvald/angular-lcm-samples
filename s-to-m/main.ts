import {Component, NgModule} from '@angular/core';

import {SubService} from './sub';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  message = this.subService.getMessage();

  constructor(private subService: SubService) {}  
}

@NgModule({
  declarations: [Main],  
  exports: [Main],
})
export class MainModule {
}
