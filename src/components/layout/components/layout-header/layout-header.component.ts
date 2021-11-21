import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderOption } from '../../layout.models';
import { MagMenuService } from '../menu-bar/menu-bar.service';

@Component({
    selector: 'mag-ui-layout-header',
    templateUrl: 'layout-header.component.html',
    styleUrls: ['layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit, OnChanges {

    @Input() options: HeaderOption[] = [];
    @Input() profileImage: string = '';
    @Input() profileName: string = '';
    _profileShortName: string = '';

    search: boolean = false;
    showOptions: boolean = false;

    constructor(public menuService: MagMenuService) { }
    ngOnChanges(changes: SimpleChanges): void {
        if(changes.profileName) {
            this.setProfileName()
        }
    }

    setProfileName() {
        this._profileShortName = (this.profileName || 'H I').split(' ').map(data => data.slice(0, 1)).join('').toUpperCase()
    }

    ngOnInit() {
        this.setProfileName()
    }
}
