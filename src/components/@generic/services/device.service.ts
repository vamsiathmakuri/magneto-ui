import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {
    constructor() { }
    
    isMobile() {
        return window.matchMedia("only screen and (max-width: 760px)").matches;
    }
}