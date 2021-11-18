import { Component, OnInit } from '@angular/core';
import { MagMenuService } from './menu-bar.service';

@Component({
    selector: 'mag-ui-menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: [ 'menu-bar.component.scss' ]
})

export class MenuBarComponent implements OnInit {
    constructor(public menuService: MagMenuService) { }

    ngOnInit() {
        this.menuService.menuStatus.subscribe(data => {
            this.showNav = data;
        });
    }

    showNav: boolean = false;
}
