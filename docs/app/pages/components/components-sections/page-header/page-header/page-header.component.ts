import { Component } from '@angular/core';
import { Breadcrumb, PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { IPlayground } from '../../../../../interfaces/IPlayground';
import { IPlaygroundProvider } from '../../../../../interfaces/IPlaygroundProvider';

@Component({
    selector: 'uxd-components-page-header',
    templateUrl: './page-header.component.html',
})
@DocumentationSectionComponent('ComponentsPageHeaderComponent')
export class ComponentsPageHeaderComponent
    extends BaseDocumentationSection
    implements IPlaygroundProvider
{
    playground: IPlayground = {
        files: {
            'app.component.html': this.snippets.raw.appHtml,
            'app.component.ts': this.snippets.raw.appTs,
        },
        modules: [
            {
                imports: ['PageHeaderModule'],
                library: '@ux-aspects/ux-aspects',
            },
            {
                imports: ['RouterModule'],
                library: '@angular/router',
                providers: ['RouterModule.forRoot([])'],
            },
        ],
    };

    condensed: boolean = false;

    crumbs: Breadcrumb[] = [
        {
            title: 'Archive',
            onClick: () => {},
        },
        {
            title: '2017',
            onClick: () => {},
        },
    ];

    items: PageHeaderNavigationItem[] = [
        {
            icon: 'home',
            title: 'Home',
        },
        {
            icon: 'analytics',
            title: 'Analytics',
            children: [
                {
                    title: 'Bar Charts',
                },
                {
                    title: 'Pie Charts',
                    children: [
                        {
                            title: 'Daily View',
                        },
                        {
                            title: 'Weekly View',
                        },
                        {
                            title: 'Monthly View',
                        },
                    ],
                },
            ],
        },
    ];

    iconMenus: PageHeaderIconMenu[] = [
        {
            icon: 'notification',
            label: 'Notifications. 3 new items.',
            badge: 3,
            dropdown: [
                {
                    icon: 'chat',
                    title: 'You have 16 messages',
                    subtitle: '4 minutes ago',
                    divider: true,
                },
                {
                    icon: 'social-twitter',
                    title: '3 New Followers',
                    subtitle: '12 minutes ago',
                    divider: true,
                },
                {
                    icon: 'cloud',
                    title: 'Server Rebooted',
                    subtitle: '22 minutes ago',
                },
            ],
        },
        {
            icon: 'actions',
            label: 'Actions',
            dropdown: [
                {
                    header: true,
                    title: 'John Doe',
                    divider: true,
                },
                {
                    icon: 'user-settings',
                    title: 'Settings',
                },
                {
                    icon: 'logout',
                    title: 'Log Out',
                },
                {
                    title: 'Show Tips',
                },
            ],
        },
    ];

    constructor() {
        super(
            import.meta.webpackContext('./snippets/', {
                recursive: false,
                regExp: /\.(html|css|js|ts)$/,
            })
        );
    }
}
