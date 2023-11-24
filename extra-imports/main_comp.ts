import {Component} from '@angular/core';

/** Test component */
@Component({
  selector: 'payam-main',
  template: `
    <internal-comp></internal-comp>
    <external-comp></external-comp>
    `,
})
export class MainComp {
}

