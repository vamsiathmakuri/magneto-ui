import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagTabsModule } from 'src/components/tabs/tabs.module';

import { TabsPageComponent } from './tabs-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: TabsPageComponent
        }]),
        MagTabsModule
    ],
    exports: [],
    declarations: [TabsPageComponent],
    providers: [],
})
export class TabsPageModule { }
