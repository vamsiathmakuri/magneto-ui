import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagLayoutModule } from 'src/components/layout/layout.module';
import { HomeComponent } from '../home/home.component';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: DashboardComponent,
            children: [{
                path: '**',
                component: HomeComponent
            }]
        }]),
        MagLayoutModule
    ],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
