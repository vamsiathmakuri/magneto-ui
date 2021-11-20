import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagLayoutModule } from 'src/components/layout/layout.module';
import { UnderConstructionComponent } from './components/construction/construction.component';
import { HomeComponent } from './components/home/home.component';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: DashboardComponent,
            children: [{
                path: '',
                component: HomeComponent,
            }, {
                path: '**',
                component: UnderConstructionComponent
            }]
        }]),
        MagLayoutModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        UnderConstructionComponent
    ],
    providers: [],
})
export class DashboardModule { }
