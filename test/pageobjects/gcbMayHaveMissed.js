import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMayHaveMissed extends Base {
    get missedWidgetID() {
    return $('.ct-missed-block');
    }

    get allMissedLinksID() {
    return $$('.ct-grid-post-list h3.post-title a');
    }

    get gcbServersLinkID() {
    return $('#menu-item-19927')
    }

    async missedWidget() {
    await this.missedWidgetID.waitForExist({timeout:5000});
    }

    async clickAllMissedLinks() {
    for (let link of await this.allMissedLinksID) {
        await link.click();
        await browser.back();
    }
    }

    async youMayHaveMissed() {
    await this.missedWidget();
    await this.clickAllMissedLinks();
    }

    async gcbServersLink() {
    await this.gcbServersLinkID.click();
    }

    async allMissed() {
        await this.openGCB();
        await this.youMayHaveMissed();
        await this.gcbServersLink();
        await this.youMayHaveMissed();
    }
}

export default new GCBMayHaveMissed();