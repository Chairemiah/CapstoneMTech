import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMayHaveMissed extends Base {
  


// selectors

get missedBlockContainerID () {
    return $('.ct-missed-block');
}

get allMissedPostLinksID() {
    return $$('.ct-grid-post-list h3.post-title a');
}



// functions

async waitForMissedBlock() {
    await this.missedBlockContainerID.waitForExist({ timeout: 5000 });
}

async clickAllMissedLinks() {
    for (let link of await this.allMissedPostLinksID) {
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