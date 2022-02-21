import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagCardModule } from 'src/components/card/card.module';

import { CardsComponent } from './cards.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: CardsComponent
        }]),
        MagCardModule
    ],
    exports: [],
    declarations: [CardsComponent],
    providers: [],
})
export class CardsModule { }
