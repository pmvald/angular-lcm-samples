import {Component, NgModule} from '@angular/core';

import {SubModule} from './sub';

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
  imports: [SubModule],
  exports: [Main, SubModule],
})
export class MainModule {
}
