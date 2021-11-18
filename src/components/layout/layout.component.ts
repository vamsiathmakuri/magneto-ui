import { Component, OnInit } from '@angular/core';
import { MagMenuService } from './components/menu-bar/menu-bar.service';

@Component({
    selector: 'mag-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    constructor(public menuService: MagMenuService) { }
    
    ngOnInit() { }
}
