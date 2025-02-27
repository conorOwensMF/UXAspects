import { $$, browser } from 'protractor';
import { imageCompare } from '../../common/image-compare';
import { ColumnResizingExpandingPage } from './column-resizing-expanding.po.spec';

describe('Column Resizing Expanding Table Tests', () => {

    let page: ColumnResizingExpandingPage = new ColumnResizingExpandingPage();

    beforeEach(async () => {
        await page.getPage();
    });

    // reset the browser window once we have finished to ensure we dont effect any other tests
    afterAll(async () => {
        await browser.driver.manage().window().setSize(800, 600);
    });


    it('can increase the width of a column and the other columns remain the same - 2 column', async () => {
        expect(await imageCompare('column-resize-expanding-initial')).toEqual(0);
        await page.updateLayout();
        await page.resizeColumn(page.fixedExpandTable, 0, 347);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(817);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(823);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBe(470);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).toContain('ux-resizable-expanding-table-overflow');

        expect(await imageCompare('column-resize-expanding-column-increase')).toEqual(0);

        await page.resizeColumn(page.fixedExpandTable, 0, -347);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(470);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(482);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBe(470);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).not.toContain('ux-resizable-expanding-table-overflow');

        expect(await imageCompare('column-resize-expanding-column-decrease')).toEqual(0);

        await page.resizeColumn(page.fixedExpandTable, 1, 347);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(470);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(482);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeGreaterThanOrEqual(817);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeLessThanOrEqual(823);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).toContain('ux-resizable-expanding-table-overflow');

        await page.resizeColumn(page.fixedExpandTable, 1, -347);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(470);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(482);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeGreaterThanOrEqual(470);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeLessThanOrEqual(482);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).not.toContain('ux-resizable-expanding-table-overflow');

        await page.resizeColumn(page.fixedExpandTable, 0, -353);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(117);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(135);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeGreaterThanOrEqual(470);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeLessThanOrEqual(482);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).not.toContain('ux-resizable-expanding-table-overflow');

        await page.resizeColumn(page.fixedExpandTable, 1, -353);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(117);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(135);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(117);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(135);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).not.toContain('ux-resizable-expanding-table-overflow');

        expect(await imageCompare('column-resize-expanding-column-all-decrease')).toEqual(0);
    });

    it('can increase the width of a column and the other columns remain the same - multiple', async () => {
        await page.updateLayout();
        await page.updateColumns();

        expect(await imageCompare('column-resize-expanding-multiple-initial')).toEqual(0);

        await page.resizeColumn(page.fixedExpandTable, 0, -370);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(100);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(107);

        expect(await imageCompare('column-resize-expanding-multiple-first-column')).toEqual(0);

        await page.resizeColumn(page.fixedExpandTable, 1, -370);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeGreaterThanOrEqual(100);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeLessThanOrEqual(107);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 2)).toBe(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 3)).toBe(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 4)).toBe(50);

        expect(await imageCompare('column-resize-expanding-multiple-second-column')).toEqual(0);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).not.toContain('ux-resizable-expanding-table-overflow');

        await page.resizeColumn(page.fixedExpandTable, 2, 800);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(100);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeLessThanOrEqual(107);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeGreaterThanOrEqual(100);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBeLessThanOrEqual(107);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 2)).toBeGreaterThanOrEqual(848);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 2)).toBeLessThanOrEqual(856);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 3)).toBeGreaterThanOrEqual(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 3)).toBeLessThanOrEqual(56);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 4)).toBeGreaterThanOrEqual(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 4)).toBeLessThanOrEqual(56);

        // check if the overflow class applies when there is a scroll bar
        expect(await page.getOverflowClass()).toContain('ux-resizable-expanding-table-overflow');

        expect(await imageCompare('column-resize-expanding-multiple-increase')).toEqual(0);
    });

    it('can force update layout after pagination', async () => {
        await page.updateLayout();

        // check the initial number of rows
        expect(await page.getNumberOfRows(page.fixedExpandTable)).toBe(30);

        // ensure the column width is as expected
        expect(await page.getColumnWidth(page.fixedExpandTable, 1, 1)).toBe(470);

        // load the next page
        await page.scrollTableToBottom(page.fixedExpandTable);

        // check the initial number of rows we should now have an additional 15
        expect(await page.getNumberOfRows(page.fixedExpandTable)).toBe(45);

        // recalculate the layout
        await page.updateLayout();

        // expect the column width to be correct after relayout
        expect(await page.getColumnWidth(page.fixedExpandTable, 35, 1)).toBe(470);

    });

    it('cannot be scrolled below the min-width set on the column', async () => {
        await page.resizeColumn(page.fixedExpandTable, 0, -415);

        await page.resizeColumn(page.fixedExpandTable, 0, -50);

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBe(470);
    });

    it('should not emit widthChange when resizing below the defined min-width', async () => {
        // set initial width
        await page.resizeColumn(page.fixedExpandTable, 0, -415);

        await page.resizeColumn(page.fixedExpandTable, 0, -50);

        const text = await page.titleWidthSpan.getText();
        const match = text.match(/titleWidth = (\d+)/);
        const titleWidth = parseInt(match[1]);

        expect(titleWidth).toBeGreaterThanOrEqual(50);
    });

    it('should not require additional dragging to resize ', async () => {
        // set initial width
        await page.resizeColumn(page.fixedExpandTable, 0, -415);

        const handle = await $$('.ux-resizable-table-column-handle')[0];

        await browser.actions().mouseDown(handle).mouseMove({ x: -400, y: 0 }).mouseMove({ x: 100, y: 0 }).mouseUp().perform();

        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 0)).toBeGreaterThanOrEqual(50);
        expect(await page.getColumnHeaderWidth(page.fixedExpandTable, 1)).toBe(470);
    });

});
