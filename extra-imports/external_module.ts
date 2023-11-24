import {NgModule} from '@angular/core';

import {ExternalComp} from './external_comp';


@NgModule({
  declarations: [ExternalComp],
  exports: [ExternalComp],
})
export class ExternalModule {
}