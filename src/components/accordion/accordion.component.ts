import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mag-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss']
})

export class AccordionComponent implements OnInit {
    // status: boolean = true;
    selected: number = 1;
    constructor() { }

    ngOnInit() { }
}