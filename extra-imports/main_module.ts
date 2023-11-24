import {NgModule} from '@angular/core';

import {MainComp} from './main_comp';
import {ExternalModule} from './external_module';
import {InternalModule} from './internal_module';


@NgModule({
  declarations: [MainComp],
  imports: [ExternalModule, InternalModule],
  exports: [MainComp],
})
export class MainModule {
}
