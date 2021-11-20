import { Component, Input, OnInit } from '@angular/core';
import { MagMenuService } from './components/menu-bar/menu-bar.service';
import { MenuBarItem } from './layout.models';

@Component({
    selector: 'mag-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {
    contentStatus: boolean = false;

    @Input() menuItems: MenuBarItem[] = [];
    
    constructor(public menu: MagMenuService) {
        this.contentStatus = this.menu.menuStatus.value
    }
    
    ngOnInit() {
        this.menu.menuStatus.subscribe(data => {
            this.contentStatus = !data;
        });
    }
}
