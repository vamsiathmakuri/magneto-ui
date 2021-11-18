import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MagMenuService } from './components/menu-bar/menu-bar.service';

import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LayoutComponent
    ],
    declarations: [
        LayoutComponent,
        MenuBarComponent
    ],
    providers: [
        LayoutService,
        MagMenuService
    ],
})
export class MagLayoutModule { }
