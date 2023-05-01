import {Component, NgModule, forwardRef} from '@angular/core';
import {SubModule} from './sub';
import {GetMessage} from './get-message';

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  providers: [{provide: GetMessage, useExisting: forwardRef(()=>Main)}],
  //providers: [{provide: GetMessage, useClass: Main}],
})
export class Main {
  x = 'Hello!';

  setMessage() {
    this.x =  'Hello Angular!';
  }
}

@NgModule({
  declarations: [Main],
  exports: [Main],
  imports: [SubModule],
})
export class MainModule {
}
