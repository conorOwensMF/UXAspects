import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { IPlayground } from '../../../../../interfaces/IPlayground';
import { IPlaygroundProvider } from '../../../../../interfaces/IPlaygroundProvider';

@Component({
    selector: 'uxd-components-buttons-dropdowns',
    templateUrl: './dropdowns.component.html',
    styleUrls: ['./dropdowns.component.less'],
    encapsulation: ViewEncapsulation.None,
})
@DocumentationSectionComponent('ComponentsDropdownsComponent')
export class ComponentsDropdownsComponent
    extends BaseDocumentationSection
    implements IPlaygroundProvider
{
    cases: string[] = [
        'Alpha',
        'Beta',
        'Gamma',
        'Delta',
        'Epsilon',
        'Zeta',
        'Eta',
        'Theta',
        'Iota',
        'Kappa',
        'Alpha 2',
        'Alpha 3',
    ];

    caseFilter: string = '';

    toggleSwitchValue: boolean = false;

    playground: IPlayground = {
        files: {
            'app.component.html': this.snippets.raw.appHtml,
            'app.component.css': this.snippets.raw.appCss,
            'app.component.ts': this.snippets.raw.appTs,
        },
        modules: [
            {
                imports: ['StringFilterModule', 'MenuModule', 'ToggleSwitchModule'],
                library: '@ux-aspects/ux-aspects',
            },
        ],
    };

    constructor() {
        super(
            import.meta.webpackContext('./snippets/', {
                recursive: false,
                regExp: /\.(html|css|js|ts)$/,
            })
        );
    }

    export(): void {}
    saveList(): void {}
    saveQuery(): void {}
}
