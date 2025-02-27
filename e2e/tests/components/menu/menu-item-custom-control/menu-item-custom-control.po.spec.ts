import { $, $$, browser } from 'protractor';

export class MenuItemCustomControlPage {

    menuTrigger = $('#open-menu');
    topFocus = $('#top-focus');
    menu = $('.ux-menu');
    disableCheckbox = $('#disable-checkbox');

    // Component Inputs
    toggleSwitch = $('#test-toggleswitch');
    checkboxes = $$('.cdk-overlay-container .test-checkbox');
    radioButtons = $$('.radio-button-container .test-radio-button');

    // Component values
    radioValue = $('#radio-value');
    checkboxValue = $('#checkbox-value');
    toggleSwitchValue = $('#toggleswitch-value');


    async getPage() {
        return await browser.get('#/menu/menu-item-custom-control');
    }

    async activeElementAttr(attr: string): Promise<string> {
        return await browser.driver.switchTo().activeElement().getAttribute(attr);
    };
}
