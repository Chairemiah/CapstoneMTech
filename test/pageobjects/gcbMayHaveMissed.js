import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMayHaveMissed extends Base {
  


// selectors

get missedBlockContainer() {
    return $('.ct-missed-block');
}

get allMissedPostLinks() {
    return $$('.ct-grid-post-list h3.post-title a');
}




// functions

async waitForMissedBlock() {
    await this.missedBlockContainer.waitForExist({ timeout: 5000 });
}

async clickAllMissedLinks() {
    for (let link of await this.allMissedPostLinks) {
        await browser.url(await link.getAttribute('href'));
        await browser.pause(2000);
        await browser.back();
        await browser.pause(1000);
    }
}

async youMayHaveMissed() {
    await this.waitForMissedBlock();
    await this.clickAllMissedLinks();
}

}


export default new GCBMayHaveMissed();