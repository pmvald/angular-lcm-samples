import {Component, NgModule, Input, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({  
  selector: 'app-child',
  template: `<span>Child!</span><app-parent *ngIf="!hideParent" [hideParent]="!hideParent"></app-parent>`,
})
class ChildComponent {
  @Input() hideParent: boolean;
}

@NgModule({
  imports: [CommonModule, forwardRef(() => ParentModule)],
  declarations: [ChildComponent],
})
export class ChildModule {}

@Component({  
  selector: 'app-parent',
  template: `<span>Parent!</span><app-child [hideParent]="hideParent"></app-child>`,
})
class ParentComponent {
  @Input() hideParent: boolean;
}

@NgModule({
  imports: [ChildModule],
  declarations: [ParentComponent],
})
class ParentModule {}
