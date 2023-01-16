import { Component, inject, Input } from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
    selector: 'ux-accordion',
    templateUrl: './accordion.component.html',
    providers: [ AccordionService ],
    host: {
        'class': 'panel-group',
        'aria-multiselectable': 'true'
    }
})
export class AccordionComponent {

    private _accordion = inject(AccordionService);

    @Input() set collapseOthers(collapseOthers: boolean) {
        this._accordion.collapseOthers = collapseOthers;
    }

}