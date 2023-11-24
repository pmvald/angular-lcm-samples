import {Component, NgModule} from '@angular/core';

import {SubModule, SubModule2Alias} from './sub';
import {TEMP, STYLE} from './template';

const TEMP2 = "hello";


/** Test component */
@Component({
  selector: 'payam-main',
  template: TEMP,
  //template: 'hello',
  //styles: [STYLE],
})
export class Main {
  x = 'Angular';
}

@NgModule({
  declarations: [Main],
  imports: [SubModule, SubModule2Alias],
  exports: [Main, SubModule],
  id: 'some',
})
export class MainModule {
}
