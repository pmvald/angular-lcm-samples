import {Component, Input, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';

//import {ParentComponent} from './parent';

@Component({
  standalone: true,
  imports: [CommonModule, forwardRef(() => ParentComponent)],
  selector: 'app-child',
  template: `<span>Child!</span><app-parent *ngIf="!hideParent" [hideParent]="!hideParent"></app-parent>`,
})
export class ChildComponent {
  @Input() hideParent: boolean;
}

@Component({
  standalone: true,
  imports: [ChildComponent],
  selector: 'app-parent',
  template: `<span>Parent!</span><app-child [hideParent]="hideParent"></app-child>`,
})
export class ParentComponent {
  @Input() hideParent: boolean;
}
