import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Main} from './main';

/** Test component */
@Component({
  selector: 'app',
  template: '<payam-main></payam-main>',
})
export class App {}

@NgModule({
  declarations: [App],
  imports: [Main, BrowserModule],
  bootstrap: [App],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

