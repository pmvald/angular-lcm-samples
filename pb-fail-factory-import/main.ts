import {Component, NgModule} from '@angular/core';

import {SubModule, subModuleFactory} from './sub';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  x = 'Angular';
}

@NgModule({
  declarations: [Main],
  imports: [subModuleFactory()],
  exports: [Main, SubModule],
  id: 'some',
})
export class MainModule {
}
