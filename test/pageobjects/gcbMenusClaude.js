import { $ } from '@wdio/globals'
import Base from './base.js';

class WindowsSystemsMenuPage {
    // Selectors
    get parentMenu() {
        return $('#menu-item-33655 > a');
    }

    get subMenu() {
        return $('#menu-item-33655 .sub-menu');
    }

    get allDropdownItems() {
        return $$('#menu-item-33655 .sub-menu a');
    }

    // Individual dropdown items
    get desktopsLink() {
        return $('#menu-item-19533 a');
    }

    get gamingLink() {
        return $('#menu-item-19535 a');
    }

    get laptopsLink() {
        return $('#menu-item-19534 a');
    }

    get convertiblesLink() {
        return $('#menu-item-41485 a');
    }

    get microMiniLink() {
        return $('#menu-item-37925 a');
    }

    // Improved hover method with better waits
    async hoverOverMenu() {
        await this.parentMenu.moveTo();
        // Wait longer for the animation to complete
        await browser.pause(800);
        // Wait for the first dropdown item to be clickable
        await this.desktopsLink.waitForClickable({ timeout: 5000 });
    }

    // Actions
    async clickDesktops() {
        await this.hoverOverMenu();
        await this.desktopsLink.waitForClickable({ timeout: 3000 });
        await this.desktopsLink.click();
    }

    async clickGaming() {
        await this.hoverOverMenu();
        await this.gamingLink.waitForClickable({ timeout: 3000 });
        await this.gamingLink.click();
    }

    async clickLaptops() {
        await this.hoverOverMenu();
        await this.laptopsLink.waitForClickable({ timeout: 3000 });
        await this.laptopsLink.click();
    }

    async clickConvertibles() {
        await this.hoverOverMenu();
        await this.convertiblesLink.waitForClickable({ timeout: 3000 });
        await this.convertiblesLink.click();
    }

    async clickMicroMini() {
        await this.hoverOverMenu();
        await this.microMiniLink.waitForClickable({ timeout: 3000 });
        await this.microMiniLink.click();
    }

    async clickAllDropdownItems() {
        const items = await this.allDropdownItems;
        const itemData = [];

        for (const item of items) {
            await this.hoverOverMenu();
            
            const text = await item.getText();
            const href = await item.getAttribute('href');
            
            // Wait for this specific item to be clickable
            await item.waitForClickable({ timeout: 3000 });
            await item.click();
            await browser.pause(1500);

            const currentUrl = await browser.getUrl();
            itemData.push({ text, expectedUrl: href, actualUrl: currentUrl });

            await browser.url('https://gcbcomputers.com/');
            await browser.pause(1000);
        }

        return itemData;
    }

    async getDropdownItemNames() {
        await this.hoverOverMenu();
        const items = await this.allDropdownItems;
        const names = [];

        for (const item of items) {
            await item.waitForDisplayed({ timeout: 3000 });
            names.push(await item.getText());
        }

        return names;
    }
}

module.exports = new WindowsSystemsMenuPage();