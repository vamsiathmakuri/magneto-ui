import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagLayoutModule } from 'src/components/layout/layout.module';
import { UnderConstructionComponent } from './pages/construction/construction.component';
import { HomeComponent } from './pages/home/home.component';

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
                path: 'forms/buttons',
                loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsModule)
            }, {
                path: 'layout/card',
                loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule)
            }, {
                path: 'layout/accordion',
                loadChildren: () => import('./pages/accordions/accordions.module').then(m => m.AccordionPageModule)
            }, {
                path: 'layout/tabs',
                loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsPageModule)
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
