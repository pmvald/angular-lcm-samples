import {Component, NgModule} from '@angular/core';

import {SubModule, SubModule2Alias} from './sub';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  x = 'Angular';
}

@NgModule({
  declarations: [[Main]],
  imports: [[[SubModule]], SubModule2Alias],
  exports: [[Main], [SubModule]],
  id: 'some',
})
export class MainModule {
}
