import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MagButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [MagButtonComponent],
    declarations: [MagButtonComponent],
    providers: [],
})
export class MagButtonModule { }
