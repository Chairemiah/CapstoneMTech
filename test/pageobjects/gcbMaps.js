import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMaps extends Base {
    get mapsIframe() {
        return $('iframe[title="Google Map"]');
    }
    
    get viewLargerMapLink() {
        return $('a[aria-label="View larger map"]');
    }
    
    async scrollDown() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight / 2);
        });
        await expect(this.mapsIframe).toBeExisting();
    }
    
    async viewLargerMap() {
        await browser.switchFrame(await this.mapsIframe);
        await this.viewLargerMapLink.click();
        await browser.switchFrame(null);
        
    }
    
    async verifyNewTabOpened() {
        return (await browser.getWindowHandles()).length > 1;
    }

    async switchToNewTab() {
        if ((await browser.getWindowHandles()).length > 1) {
            await browser.switchToWindow(
                (await browser.getWindowHandles())[1]
            );
        };
        await expect(browser).toHaveUrl(expect.stringContaining('google.com/maps'));
    }

    async closeNewTabAndReturnToMain() {
        if ((await browser.getWindowHandles()).length > 1) {
            await browser.closeWindow();
            await browser.switchToWindow(
                (await browser.getWindowHandles())[0]
            );
        };
        await expect(browser).toHaveUrl(expect.stringContaining('gcbcomputers.com'));
    }

    async googleMaps() {
        await this.openGCB();
        await this.scrollDown();
        await this.viewLargerMap();
        await this.verifyNewTabOpened();
        await this.switchToNewTab();
        await this.closeNewTabAndReturnToMain();
    }
}

export default new GCBMaps();