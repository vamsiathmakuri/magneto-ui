import { Component, OnInit } from '@angular/core';
import { MagMenuService } from '../menu-bar/menu-bar.service';

@Component({
    selector: 'mag-ui-layout-header',
    templateUrl: 'layout-header.component.html',
    styleUrls: ['layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

    search: boolean = false;
    options: boolean = false;

    constructor(public menuService: MagMenuService) { }

    ngOnInit() { }
}
