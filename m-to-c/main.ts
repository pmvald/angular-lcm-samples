import {Component, NgModule} from '@angular/core';

import {SubModule} from './sub';

/** Test component */
@Component({
  standalone: true,
  selector: 'payam-main',
  templateUrl: './main.ng.html',
  imports: [SubModule],
})
export class Main {
  x = 'Dolly';
}
