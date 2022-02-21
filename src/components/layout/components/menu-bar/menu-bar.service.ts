import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MagMenuService {
    constructor() {}

    menuStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    toggle() {
        this.menuStatus.next(!this.menuStatus.value)
    }

    open() {
        this.menuStatus.next(true);
    }

    close() {
        this.menuStatus.next(false);
    }

}
