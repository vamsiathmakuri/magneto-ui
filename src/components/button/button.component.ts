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
    successEnabled: boolean = false;
    failEnabled: boolean = false;

    constructor() { }
    ngOnInit() { }

    buttonClick() {
        this.loaderEnabled = true;
        this.successEnabled = false;
        this.failEnabled = false;
        setTimeout(() => {
            this.loaderEnabled = false;
            if (Math.ceil(Math.random()*100) % 2 == 0) {
                this.successEnabled = true;
            } else {
                this.failEnabled = true;
            }
        }, 3000);
    }
}