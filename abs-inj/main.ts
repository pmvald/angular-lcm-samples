import {Component, NgModule, Injectable, Directive, Pipe, InjectionToken, Inject} from '@angular/core';
import {type CellType, SubService} from './sub';

/*@Injectable()
export class SubService {}*/


/*@Injectable()
export abstract class AbsServiceEmpty {}

@Injectable()
export abstract class AbsServiceWithService {
  constructor (readonly sub: SubService) {}
}*/

/*@Injectable({providedIn: 'root'})
export class AbsServiceT<S> {
  constructor (readonly selection: S) {}
}*/

export type HammerLoader = () => Promise<void>;
export const HAMMER_LOADER = new InjectionToken<HammerLoader>('HammerLoader');
@Injectable()
export class Service2 {
  constructor (@Inject(HAMMER_LOADER) private readonly loader?: HammerLoader|null) {}
}


/*@Injectable()
export class ServiceT<S> {
  constructor (readonly selection: S, readonly sub: SubService) {}
}*/

// ===========================
/*@Component({
  template: '',
})
export abstract class CompT<S> {
  constructor (readonly selection: S, readonly sub: SubService) {}
}

@NgModule({
})
export class ModuleT<S> {
  constructor (readonly selection: S, readonly sub: SubService) {}
}*/

/*@Directive({})
export class ComparisonTableCellHost {

  constructor(readonly cellType: CellType, readonly subService: SubService) {}
}*/