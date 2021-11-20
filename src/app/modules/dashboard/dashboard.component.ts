import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { MenuBarItem } from 'src/components/layout/layout.models';

@Component({
    selector: 'mag-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    @ViewChild(LayoutComponent) layout!: LayoutComponent;

    menuItems: MenuBarItem[] = [{
        name: 'Dashboard',
        path: '/dashboard',
        iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg'
    }, {
        name: 'Items',
        path: '/items',
        iconURL: 'https://www.svgrepo.com/show/356121/users-three.svg',
        children: [{
            name: 'Item 1',
            iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
            path: '/items/1'
        }, {
            name: 'Item 2',
            iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
            path: '/items/2'
        }, {
            name: 'Item 3',
            iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
            path: '/items/3'
        }, {
            name: 'Item 4',
            iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
            path: '/items/4'
        }, {
            name: 'Item 5',
            iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
            path: '/items/5'
        }]
    }, {
        name: 'Basic Tab',
        iconURL: 'https://www.svgrepo.com/show/356111/store.svg',
        path: '/basic-tab'
    }, {
        name: 'Extra Tab 1',
        iconURL: 'https://www.svgrepo.com/show/356156/envelope.svg',
        path: '/etab-1'
    }, {
        name: 'Extra Tab 2',
        iconURL: 'https://www.svgrepo.com/show/356150/coupon.svg',
        path: '/etab-2'
    }, ...new Array(0).fill(1).map((data, index) => {
        return {
            name: 'Auto Items ' + index,
            path: '/autoitems',
            iconURL: 'https://www.svgrepo.com/show/356121/users-three.svg',
            children: [{
                name: 'Item 1'+index,
                iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
                path: '/items/1'+index
            }, {
                name: 'Item 2'+index,
                iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
                path: '/items/2'+index
            }, {
                name: 'Item 3'+index,
                iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
                path: '/items/3'+index
            }, {
                name: 'Item 4'+index,
                iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
                path: '/items/4'+index
            }, {
                name: 'Item 5'+index,
                iconURL: 'https://www.svgrepo.com/show/356113/tablet.svg',
                path: '/items/5'+index
            }]
        }
    })];

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.layout.menuService.toggle();
    }
}