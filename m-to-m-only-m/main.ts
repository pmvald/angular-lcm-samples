import {NgModule} from '@angular/core';

import {SubModule} from './sub';

function getImports() {
  return[SubModule];
}

@NgModule({
  imports: getImports(),
  exports: [SubModule],
})
export class MainModule {
}
