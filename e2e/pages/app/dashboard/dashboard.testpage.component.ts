import { Component, ViewChild } from '@angular/core';
import { DashboardComponent, DashboardLayoutData, DashboardOptions } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'dashboard-app',
    templateUrl: './dashboard.testpage.component.html',
    styleUrls: ['./dashboard.testpage.component.css']
})
export class DashboardTestPageComponent {

    @ViewChild('dashboard') uxDashboard: DashboardComponent;

    wgt1RowSpan = 2;
    wgt2ColSpan = 2;

    options: DashboardOptions = {
        columns: 4,
        padding: 10,
        rowHeight: 220,
        emptyRow: false,
        minWidth: 187
    };

    adjustedOptions: DashboardOptions = {
        columns: 5,
        padding: 20,
        rowHeight: 250,
        emptyRow: false,
        minWidth: 187
    };

    layout: ReadonlyArray<DashboardLayoutData>;

    widget1Enabled = true;

    changeOptions(): void {
        this.options = this.adjustedOptions;
    }

    refreshLayout() {
        this.uxDashboard.refreshLayout();
    }

    wgt1SetRowSpan(rowSpan: number): void {
        this.wgt1RowSpan = rowSpan;
    }

    wgt2SetColSpan(colSpan: number): void {
        this.wgt2ColSpan = colSpan;
    }
}
