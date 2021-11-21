import { Component, OnInit, ViewChild, ɵɵngDeclareClassMetadata } from '@angular/core';
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
        name: 'Welcome',
        path: '/',
        iconURL: 'https://www.svgrepo.com/show/356325/heart.svg'
    }, {
        name: 'Setup',
        path: '/setup',
        iconURL: 'https://www.svgrepo.com/show/356335/logout.svg'
    }, {
        name: 'Themes',
        path: '/themes',
        iconURL: 'https://www.svgrepo.com/show/356334/lamp.svg'
    }, {
        name: 'Icons',
        path: '/icons',
        iconURL: 'https://www.svgrepo.com/show/356320/emoji-smile.svg'
    }, {
        name: 'Directives',
        iconURL: 'https://www.svgrepo.com/show/356322/graph.svg',
        children: [{
            name: 'Click Outside',
            iconURL: 'https://www.svgrepo.com/show/356397/arrow-right-1.svg',
            path: '/directive/click-outside'
        }]
    }, {
        name: 'Services',
        iconURL: 'https://www.svgrepo.com/show/356364/setting.svg',
        children: [{
            name: 'Device',
            iconURL: 'https://www.svgrepo.com/show/356397/arrow-right-1.svg',
            path: '/service/device'
        }]
    }, {
        name: 'Layout',
        iconURL: 'https://www.svgrepo.com/show/356293/category-1.svg',
        children: [{
            name: 'Dashboard',
            iconURL: 'https://www.svgrepo.com/show/356296/chart-square.svg',
            path: '/layout/dashboard'
        }, {
            name: 'Card',
            iconURL: 'https://www.svgrepo.com/show/356345/note.svg',
            path: '/layout/card'
        }, {
            name: 'Accordion',
            iconURL: 'https://www.svgrepo.com/show/356359/scan.svg',
            path: '/layout/accordion'
        }, {
            name: 'Tabs',
            iconURL: 'https://www.svgrepo.com/show/356313/drawer-add.svg',
            path: '/layout/tabs'
        }, {
            name: 'List',
            iconURL: 'https://www.svgrepo.com/show/356303/clipboard-text.svg',
            path: '/layout/list'
        }, {
            name: 'Stepper',
            iconURL: 'https://www.svgrepo.com/show/356374/tick-square.svg',
            path: '/layout/stepper'
        }]
    }, {
        name: 'Forms',
        iconURL: 'https://www.svgrepo.com/show/356306/copy.svg',
        children: [{
            name: 'Input',
            iconURL: 'https://www.svgrepo.com/show/356316/edit.svg',
            path: '/forms/input'
        }, {
            name: 'Buttons',
            iconURL: 'https://www.svgrepo.com/show/356310/direct-left.svg',
            path: '/forms/buttons'
        }, {
            name: 'Select',
            iconURL: 'https://www.svgrepo.com/show/356360/row.svg',
            path: '/forms/select'
        }, {
            name: 'Radio',
            iconURL: 'https://www.svgrepo.com/show/356372/tick-circle.svg',
            path: '/forms/radio'
        }, {
            name: 'Checkbox',
            iconURL: 'https://www.svgrepo.com/show/356374/tick-square.svg',
            path: '/forms/checkbox'
        }, {
            name: 'Date & Time Picker',
            iconURL: 'https://www.svgrepo.com/show/356291/calendar.svg',
            path: '/forms/date-picker'
        }, {
            name: 'Chips',
            iconURL: 'https://www.svgrepo.com/show/356332/lable.svg',
            path: '/forms/chips'
        }, {
            name: 'Slider',
            iconURL: 'https://www.svgrepo.com/show/356369/slider.svg',
            path: '/forms/slider'
        }]
    }, {
        name: 'Data',
        iconURL: 'https://www.svgrepo.com/show/356343/movie.svg',
        children: [{
            name: 'Table',
            iconURL: 'https://www.svgrepo.com/show/356344/movie-1.svg',
            path: '/data/table'
        }, {
            name: 'Picker',
            iconURL: 'https://www.svgrepo.com/show/356307/column.svg',
            path: '/data/picker'
        }]
    }, {
        name: 'Alerts & Overlays',
        iconURL: 'https://www.svgrepo.com/show/356305/clock.svg',
        children: [{
            name: 'Dialog',
            iconURL: 'https://www.svgrepo.com/show/356317/drawer-done.svg',
            path: '/overlay/dialog'
        }, {
            name: 'Popover',
            iconURL: 'https://www.svgrepo.com/show/356353/qustion-circle.svg',
            path: '/overlay/popover'
        }, {
            name: 'Toast Message',
            iconURL: 'https://www.svgrepo.com/show/356367/shield-done.svg',
            path: '/overlay/toast'
        }, {
            name: 'Alerts',
            iconURL: 'https://www.svgrepo.com/show/356384/volume-low.svg',
            path: '/overlay/alert'
        }, {
            name: 'Loaders',
            iconURL: 'https://www.svgrepo.com/show/50491/loading.svg',
            path: '/overlay/loader'
        }]
    }];

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.layout.menu.toggle();
    }
}