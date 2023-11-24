import {Component, NgModule, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

import {SubModule} from './sub';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  //changeDetection: 'hahaha!',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Main {
  x = 'Angular';
}

@NgModule({
  declarations: [Main],
  imports: [SubModule],
  exports: [Main, SubModule],
  id: 'some',
})
export class MainModule {
}
