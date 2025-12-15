import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBRecentItems extends Base {
    get recentItemsID() {
        return $$('.trending-content a[href*="gcbcomputers.com"]');
    }

    async recentItems() {
        await this.openGCB();
            for (let i = 0; i < (await this.recentItemsID).length; i++) {
                await (await this.recentItemsID)[i].click();
                await browser.waitUntil(async () => (await browser.getUrl()).includes('gcbcomputers.com'));
                await browser.back();
            }
        await this.openGCBServers();
            for (let i = 0; i < (await this.recentItemsID).length; i++) {
                await (await this.recentItemsID)[i].click();
                await browser.waitUntil(async () => (await browser.getUrl()).includes('servers.gcbcomputers.com'));
                await browser.back();
            }
    }




}

export default new GCBRecentItems();
