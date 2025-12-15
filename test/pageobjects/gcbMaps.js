import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMaps extends Base {
    get mapsIframeID() {
        return $('iframe[title="Google Map"]');
    }

    get mapsServersID() {
        return $('#block-14')
    }
    
    get viewLargerMapID() {
        return $('a[aria-label="View larger map"]');
    }
    
    get appleMapsID() {
        return $('.mk-map-node-element')
    }

    async scrollDown() {
        await this.mapsIframeID.scrollIntoView();
        await expect(this.mapsIframeID).toBeExisting();
    }

    async appleMapServers() {
        await this.openGCBServers();
        await this.appleMapsID.scrollIntoView();
        await expect(this.appleMapsID).toBeExisting();
    }
    
    async viewLargerMap() {
        await browser.switchFrame(await this.mapsIframeID);
        await this.viewLargerMapID.click();
        await browser.switchFrame(null);
    }

    async verifyNewTab() {
        if ((await browser.getWindowHandles()).length > 1) {
            await browser.switchToWindow(
                (await browser.getWindowHandles())[1]
            );
        };
        await expect(browser).toHaveUrl(expect.stringContaining('1155+N+Main+St,+Layton,+UT+84041'));
    }

    async closeTab() {
        if ((await browser.getWindowHandles()).length > 1) {
            await browser.closeWindow();
            await browser.switchToWindow(
                (await browser.getWindowHandles())[0]
            );
        };
        await expect(browser).toHaveUrl(expect.stringContaining('gcbcomputers.com'));
    }

    async allMaps() {
        await this.openGCB();
        await this.scrollDown();
        await this.viewLargerMap();
        await this.verifyNewTab();
        await this.closeTab();
        await this.appleMapServers();
    }
}

export default new GCBMaps();