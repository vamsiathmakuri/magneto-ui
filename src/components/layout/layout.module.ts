import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagDirectivesModule } from '../@directives/mag-directives.module';
import { DeviceService } from '../@generic/services/device.service';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MagMenuService } from './components/menu-bar/menu-bar.service';

import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MagDirectivesModule
    ],
    exports: [
        LayoutComponent
    ],
    declarations: [
        LayoutComponent,
        MenuBarComponent,
        LayoutHeaderComponent
    ],
    providers: [
        LayoutService,
        MagMenuService,
        DeviceService
    ],
})
export class MagLayoutModule { }
