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
    showContentEvent: any;

    @Input() menuItems: MenuBarItem[] = [];
    
    constructor(public menu: MagMenuService) {
        this.contentStatus = this.menu.menuStatus.value
    }
    
    ngOnInit() {
        this.menu.menuStatus.subscribe(data => {

            clearInterval(this.showContentEvent);
            if(!data) {
                this.showContentEvent = setTimeout(() => {
                    this.contentStatus = !data;
                }, 220);
            } else {
                this.contentStatus = !data;
            }
        });
    }
}
