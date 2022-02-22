import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mag-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss']
})

export class TabsComponent implements OnInit {
    selectedTab: number = 1;

    constructor() { }

    ngOnInit() { }
}