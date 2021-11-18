import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mag-ui-menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: [ 'menu-bar.component.scss' ]
})

export class MenuBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    showNav: boolean = false;
    toggleNav() {
        this.showNav = !this.showNav;
    }
}