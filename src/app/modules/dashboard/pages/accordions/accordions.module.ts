import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagAccordionModule } from 'src/components/accordion/accordion.module';

import { AccordionPageComponent } from './accordions.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: AccordionPageComponent
        }]),
        MagAccordionModule
    ],
    exports: [],
    declarations: [AccordionPageComponent],
    providers: [],
})
export class AccordionPageModule { }
