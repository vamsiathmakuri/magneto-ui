import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TabsComponent
    ],
    declarations: [
        TabsComponent
    ],
    providers: [],
})
export class MagTabsModule { }
