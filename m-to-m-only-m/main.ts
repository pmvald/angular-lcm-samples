import {NgModule} from '@angular/core';

import {SubModule} from './sub';

function getImports() {
  return [SubModule];
}

@NgModule({
  imports: [SubModule],
  exports: [SubModule],
  id: 'haha',
})
export class MainModule {
}
