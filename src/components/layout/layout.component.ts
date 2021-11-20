import { Component, Input, OnInit } from '@angular/core';
import { MagMenuService } from './components/menu-bar/menu-bar.service';
import { MenuBarItem } from './layout.models';

@Component({
    selector: 'mag-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {
    menuStatus: boolean;

    @Input() menuItems: MenuBarItem[] = [];
    
    constructor(public menuService: MagMenuService) {
        this.menuStatus = this.menuService.menuStatus.value
    }
    
    ngOnInit() {
        this.menuService.menuStatus.subscribe(data => {
            this.menuStatus = data;
        });
    }
}
