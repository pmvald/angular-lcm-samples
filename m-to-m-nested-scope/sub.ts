import {Component, Input, NgModule} from '@angular/core';

@Component({
  selector: 'payam-sub',
  templateUrl: './sub.ng.html',
})
export class Sub {
  @Input() input = '';
}

@NgModule({
  declarations: [Sub],
  exports: [Sub],
})
export class SubModule {
}

@NgModule({
})
export class SubModule2 {
}

export const SubModule2Alias = SubModule2;

