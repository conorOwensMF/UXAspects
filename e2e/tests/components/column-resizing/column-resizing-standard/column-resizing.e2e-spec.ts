import { browser } from 'protractor';
import { imageCompare } from '../../common/image-compare';
import { ColumnResizingPage } from './column-resizing.po.spec';

describe('Column Resizing', () => {

    let page: ColumnResizingPage = new ColumnResizingPage();

    beforeEach(async () => {
        await page.getPage();
    });

    // reset the browser window once we have finished to ensure we dont effect any other tests
    afterAll(async () => {
        await browser.driver.manage().window().setSize(800, 600);
    });

    it('should have correct initial states (standard table)', async () => {
        expect(await imageCompare('column-resize-initial')).toEqual(0);
    });

    it('should have correct initial states (fixed table)', async () => {
        await page.updateLayout();
        expect(await imageCompare('column-resize-initial-fixed')).toEqual(0);
    });

    it('can increase the width of a column (standard table)', async () => {
        await page.resizeColumn(page.standardTable, 1, 100);
        expect(await imageCompare('column-resize-increase')).toEqual(0);
    });

    it('can increase the width of a column (fixed table)', async () => {
        await page.updateLayout();
        await page.resizeColumn(page.fixedTable, 1, 100);
        expect(await imageCompare('column-resize-increase-fixed')).toEqual(0);
    });

    it('can decrease the width of a column (standard table)', async () => {
        await page.resizeColumn(page.standardTable, 1, -100);
        expect(await imageCompare('column-resize-decrease')).toEqual(0);
    });

    it('can decrease the width of a column (fixed table)', async () => {
        await page.updateLayout();
        await page.resizeColumn(page.fixedTable, 1, -100);
        expect(await imageCompare('column-resize-decrease-fixed')).toEqual(0);
    });

    it('can force update layout after pagination (fixed table)', async () => {
        await page.updateLayout();

        // check the initial number of rows
        expect(await page.getNumberOfRows(page.fixedTable)).toBe(30);

        // ensure the column width is as expected
        expect(await page.getColumnWidth(page.fixedTable, 1, 1)).toBe(260);

        // load the next page
        await page.scrollTableToBottom(page.fixedTable);

        // check the initial number of rows we should now have an additional 15
        expect(await page.getNumberOfRows(page.fixedTable)).toBe(45);

        // recalculate the layout
        await page.updateLayout();

        // expect the column width to be correct after relayout
        expect(await page.getColumnWidth(page.fixedTable, 35, 1)).toBe(260);

    });
});
