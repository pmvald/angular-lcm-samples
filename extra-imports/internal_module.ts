import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InternalComp} from './internal_comp';


@NgModule({
  declarations: [InternalComp],
  imports: [CommonModule],
  exports: [InternalComp],
})
export class InternalModule {
}