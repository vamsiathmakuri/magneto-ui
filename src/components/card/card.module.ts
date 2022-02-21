import { NgModule } from '@angular/core';

import { MagBasicCardComponent } from './components/basic-card/basic-card.component';
import { MagImageCardComponent } from './components/image-card/image-card.component';
import { MagOverViewComponent } from './components/overview-card/overview-card.component';
import { MagUserCardComponent } from './components/user-card/user-card.component';

@NgModule({
    imports: [],
    exports: [
        MagBasicCardComponent,
        MagUserCardComponent,
        MagOverViewComponent,
        MagImageCardComponent
    ],
    declarations: [
        MagBasicCardComponent,
        MagUserCardComponent,
        MagOverViewComponent,
        MagImageCardComponent
    ],
    providers: [],
})
export class MagCardModule { }
