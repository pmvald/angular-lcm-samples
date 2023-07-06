import {Component, NgModule, Input, forwardRef} from '@angular/core';

@Component({
  selector: 'payam-main2',
  template: '<span>Main2</span>',
})
export class Main2 {
}

@NgModule({
  declarations: [forwardRef(()=>Main), Main2],
  imports: [forwardRef(()=>SubModule)],
  exports: [forwardRef(()=>Main), forwardRef(()=>SubModule)],
  id: 'some',
})
export class MainModule {
}

@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  x = 'Angular';
}

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
