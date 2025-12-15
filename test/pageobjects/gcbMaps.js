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
    
    async scrollDown() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight / 2);
        });
        await expect(this.mapsIframeID).toBeExisting();
    }

    async scrollDownServers() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight / 3);
        });
        await expect(this.mapsServersID).toBeExisting();
    }
    
    async viewLargerMap() {
        await browser.switchFrame(await this.mapsIframeID);
        await this.viewLargerMapID.click();
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
        await expect(browser).toHaveUrl(expect.stringContaining('1155+N+Main+St,+Layton,+UT+84041'));
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
        await this.openGCBServers();
        await this.scrollDownServers();
        
    }
}

export default new GCBMaps();