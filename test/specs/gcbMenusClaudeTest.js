import { $ } from '@wdio/globals'
import Base from './base.js';
import WindowsSystemsMenuPage from './gcbMenus.js'


const WindowsSystemsMenu = require('../pageobjects/WindowsSystemsMenu.page');

describe('Windows Systems Dropdown Menu', () => {
    beforeEach(async () => {
        await browser.url('https://gcbcomputers.com/');
    });

    it('should display all dropdown items when hovering', async () => {
        const itemNames = await WindowsSystemsMenu.getDropdownItemNames();
        
        expect(itemNames).toContain('Desktops');
        expect(itemNames).toContain('Gaming');
        expect(itemNames).toContain('Laptops');
        expect(itemNames).toContain('Convertibles & Tablets');
        expect(itemNames).toContain('Micro/Mini');
    });

    it('should navigate to Desktops page', async () => {
        await WindowsSystemsMenu.clickDesktops();
        expect(await browser.getUrl()).toContain('/desktops/');
    });

    it('should navigate to Gaming page', async () => {
        await WindowsSystemsMenu.clickGaming();
        expect(await browser.getUrl()).toContain('/gamers/');
    });

    it('should navigate to Laptops page', async () => {
        await WindowsSystemsMenu.clickLaptops();
        expect(await browser.getUrl()).toContain('/laptops/');
    });

    it('should navigate to Convertibles page', async () => {
        await WindowsSystemsMenu.clickConvertibles();
        expect(await browser.getUrl()).toContain('/convertibles-tablets/');
    });

    it('should navigate to Micro/Mini page', async () => {
        await WindowsSystemsMenu.clickMicroMini();
        expect(await browser.getUrl()).toContain('/micro-mini-systems/');
    });

    it('should successfully click all dropdown items', async () => {
        const results = await WindowsSystemsMenu.clickAllDropdownItems();
        
        results.forEach(result => {
            console.log(`✓ ${result.text}: ${result.actualUrl}`);
            expect(result.actualUrl).toBe(result.expectedUrl);
        });
    });
});