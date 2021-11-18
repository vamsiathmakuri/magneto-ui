import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutComponent } from 'src/components/layout/layout.component';

@Component({
    selector: 'mag-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    @ViewChild(LayoutComponent) layout!: LayoutComponent;

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.layout.menuService.toggle();
    }
}