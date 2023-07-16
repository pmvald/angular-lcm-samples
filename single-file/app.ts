import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/** Test component */
@Component({
  selector: 'app',
  template: '<h1>Hello angular!</h1>',
})
export class App {}

@NgModule({
  declarations: [App],
  imports: [BrowserModule],
  bootstrap: [App],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

