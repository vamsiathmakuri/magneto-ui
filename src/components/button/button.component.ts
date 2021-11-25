import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mag-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class MagButtonComponent implements OnInit {
    @Input('type') type: 'default' | 'ghost' | 'link' | 'light' | 'outline' | 'solid' = 'solid';
    @Input('icon') iconUrl: string = '';
    @Input('buttonText') text: string = '';
    
    loaderEnabled: boolean = false;
    constructor() { }
    ngOnInit() { }
}