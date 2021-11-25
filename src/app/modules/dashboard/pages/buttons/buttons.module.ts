import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagButtonModule } from 'src/components/button/button.module';

import { ButtonsComponent } from './buttons.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: ButtonsComponent
        }]),
        MagButtonModule
    ],
    exports: [],
    declarations: [ButtonsComponent],
    providers: [],
})
export class ButtonsModule { }
