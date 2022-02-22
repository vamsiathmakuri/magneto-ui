import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AccordionComponent
    ],
    declarations: [
        AccordionComponent
    ],
    providers: [],
})
export class MagAccordionModule { }
