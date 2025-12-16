import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMayHaveMissed extends Base {
    get missedWidgetID() {
    return $('.ct-missed-block');
    }

    get allMissedID() {
    return $$('.ct-grid-post-list h3.post-title a');
    }

    async missedWidget() {
    await this.missedWidgetID.waitForExist({timeout:5000});
    }

    async allMissed() {
        await this.openGCB();
            for (let i = 0; i < (await this.allMissedID).length; i++) {
                await this.missedWidget();
                await (await this.allMissedID)[i].click();
                await browser.waitUntil(async () => (await browser.getUrl()).includes('gcbcomputers.com'));
                await browser.back();
            }
        await this.openGCBServers();
            for (let i = 0; i < (await this.allMissedID).length; i++) {
                await this.missedWidget();
                await (await this.allMissedID)[i].click();
                await browser.waitUntil(async () => (await browser.getUrl()).includes('servers.gcbcomputers.com/2025'));
                await browser.back();
            }
    }
}

export default new GCBMayHaveMissed();