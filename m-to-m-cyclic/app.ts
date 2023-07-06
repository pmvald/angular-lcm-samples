import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ChildModule} from './main';

/** Test component */
@Component({
  selector: 'app',
  template: '<app-child [hideParent]="false"></app-child>',
})
export class App {
}

@NgModule({
  declarations: [App],
  imports: [ChildModule, BrowserModule],
  bootstrap: [App],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

