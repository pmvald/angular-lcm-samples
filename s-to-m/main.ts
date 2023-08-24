import {Component, NgModule, Attribute, InjectionToken, Inject, inject, Optional, Pipe} from '@angular/core';

import {SubService} from './sub'
import SubService2 from './sub2'
import * as S from './sub3'

export const MESSAGE_TOKEN: InjectionToken<string> = new InjectionToken<string>('MESSAGE_TOKEN');

/** Test component */
@Component({
  selector: 'payam-main',
  templateUrl: './main.ng.html',
})
export class Main {
  message = `${this.subService.getMessage()} ${this.subService2.getMessage()}${this.subService3.getMessage()}`;

  x = inject(SubService);

  constructor(
    private subService: SubService,
    private subService2: SubService2,
    private subService3: S.SubService3,
    @Attribute('title') title: string,
    @Inject(MESSAGE_TOKEN) tokenMessage: string,
    ) {}  
}

@NgModule({
  declarations: [Main],  
  exports: [Main],
})
export class MainModule {
  constructor(
    private subService: SubService,
    private subService2: SubService2,
    private subService3: S.SubService3,
    @Attribute('title') title: string,
    @Inject(MESSAGE_TOKEN) tokenMessage: string,
    ) {} 
}

@Pipe({
  name: 'pipe',
  //standalone: true,
})
export class MainPipe {         
  constructor(
    private subService: SubService,
    private subService2: SubService2,
    private subService3: S.SubService3,
    @Attribute('title') title: string,
    @Inject(MESSAGE_TOKEN) tokenMessage: string,
    ) {}  
}
