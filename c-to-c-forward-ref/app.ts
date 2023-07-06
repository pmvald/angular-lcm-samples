import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ChildComponent} from './main';

/** Test component */
@Component({
  selector: 'app',
  template: '<app-child [hideParent]="false"></app-child>',
})
export class App {
}

@NgModule({
  declarations: [App],
  imports: [ChildComponent, BrowserModule],
  bootstrap: [App],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

