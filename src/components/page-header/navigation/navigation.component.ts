import { AfterViewInit, Component, ElementRef, inject, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ResizeService } from '../../../directives/resize/index';
import { PageHeaderNavigation, PageHeaderService } from '../page-header.service';
import { PageHeaderNavigationItemComponent } from './navigation-item/navigation-item.component';
import { PageHeaderNavigationService } from './navigation.service';

@Component({
    selector: 'ux-page-header-horizontal-navigation',
    templateUrl: './navigation.component.html',
    providers: [PageHeaderNavigationService],
    host: {
        'role': 'menubar'
    }
})
export class PageHeaderNavigationComponent implements AfterViewInit, OnDestroy {
    readonly elementRef = inject(ElementRef);

    readonly resizeService = inject(ResizeService);

    private readonly _navigationService = inject(PageHeaderNavigationService);

    private readonly _pageHeaderService = inject(PageHeaderService);

    @ViewChildren(PageHeaderNavigationItemComponent) menuItems: QueryList<PageHeaderNavigationItemComponent>;

    items$: BehaviorSubject<PageHeaderNavigationItem[]> = this._pageHeaderService.items$;
    indicatorVisible: boolean = false;
    indicatorX: number = 0;
    indicatorWidth: number = 0;

    private readonly _onDestroy = new Subject();

    constructor() {
        this. resizeService.addResizeListener(this.elementRef.nativeElement).pipe(takeUntil(this._onDestroy)).subscribe(this.updateSelectedIndicator.bind(this));
        this._pageHeaderService.selected$.pipe(takeUntil(this._onDestroy), distinctUntilChanged()).subscribe(this.updateSelectedIndicator.bind(this));
        this._pageHeaderService.secondary$.pipe(takeUntil(this._onDestroy), distinctUntilChanged()).subscribe(this.updateSelectedIndicator.bind(this));
    }

    ngAfterViewInit(): void {
        this.updateSelectedIndicator();

        // setup the page focus key manager
        this._navigationService.initialize(this.menuItems);
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    updateSelectedIndicator(): void {
        setTimeout(() => {
            // find the selected item
            const selected = this.menuItems.find(item => item.item.selected);

            // determine whether or not to show the indicator
            this.indicatorVisible = !!selected;

            // set the width of the indicator to match the width of the navigation item
            if (selected) {
                const styles = getComputedStyle(selected.elementRef.nativeElement);

                this.indicatorX = selected.elementRef.nativeElement.offsetLeft;
                this.indicatorWidth = parseInt(styles.getPropertyValue('width'));
            }
        });
    }

}

export interface PageHeaderNavigationItem {
    icon?: string;
    title: string;
    selected?: boolean;
    routerLink?: string | any[];
    routerExtras?: NavigationExtras;
    select?: (item: PageHeaderNavigationItem) => void;
    children?: PageHeaderNavigationDropdownItem[];
    parent?: PageHeaderNavigation;
    disabled?: boolean;
    id?: string;
}

export interface PageHeaderNavigationDropdownItem {
    title: string;
    selected?: boolean;
    routerLink?: string | any[];
    routerExtras?: NavigationExtras;
    select?: (item: PageHeaderNavigationDropdownItem) => void;
    children?: PageHeaderNavigationDropdownItem[];
    parent?: PageHeaderNavigation;
    disabled?: boolean;
    id?: string;
}

// This is an alias for MF use as "DropdownItem" doesn't make sense in context with how it is used
export interface PageHeaderSecondaryNavigationItem extends PageHeaderNavigationDropdownItem { }