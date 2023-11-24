import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule, Routes} from '@angular/router';

import {Main} from './main';

const appRoutes: Routes = [
  {
    path: '**',
    component: Main,
  },
];

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
})
class App {
}

@NgModule({
  declarations: [App],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule],
  bootstrap: [App],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

