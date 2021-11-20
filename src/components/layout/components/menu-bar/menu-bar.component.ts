import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuBarItem } from '../../layout.models';
import { MagMenuService } from './menu-bar.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'mag-ui-menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: [ 'menu-bar.component.scss' ]
})

export class MenuBarComponent implements OnInit, OnDestroy {
    showNav: boolean = true;
    hideTextEvent: any;

    @Input() items: MenuBarItem[] = [];
    
    private subscriptions: Subscription[] = [];

    parentItem?: MenuBarItem;
    childItem?: MenuBarItem;
    set currentURL(value: string) {
        this.childItem = undefined;
        this.parentItem = this.items.find(item => {
            return (
                item.path?.startsWith(value) ||
                !!item.children?.find(child => child.path?.startsWith(value) && !!(this.childItem = child))
            )
        });
    }

    constructor(
        public service: MagMenuService,
        private router: Router
    ) { }

    ngOnInit() {
        this.currentURL = this.router.url;
        this.subscriptions.push(
            this.router.events.subscribe(event => {
                if(event instanceof NavigationEnd) {
                    this.currentURL = event.url
                }
            })
        );

        this.subscriptions.push(
            this.service.menuStatus.subscribe(data => {
                this.showNav = data;
            })
        )
    }

    redirectTo(path: string[]) {
        this.router.navigate(path);
    }

    itemOnClick(item: MenuBarItem) {
        this.parentItem = item;
        if(!item.children?.length) {
            this.router.navigate([item.path]);
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(value => value.unsubscribe());
        console.log('menu destroyed')
    }
}
