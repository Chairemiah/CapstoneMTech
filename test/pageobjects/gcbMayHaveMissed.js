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

get gcbServersLinkID() {
    return $('#menu-item-19927')
}



// functions

async waitForMissedBlock() {
    await this.missedBlockContainerID.waitForExist({ timeout: 5000 });
}

// async clickAllMissedLinks() {
//     for (let link of await this.allMissedPostLinksID) {
//         await browser.url(await link.getAttribute('href'));
//         // await browser.pause(2000);
        
//         await browser.back();
//         // await browser.pause(1000);
//     }
// }

async clickAllMissedLinks() {
    for (let link of await this.allMissedPostLinksID) {
        await link.click();
            expect([
                'https://gcbcomputers.com/',
                'https://servers.gcbcomputers.com/'
            ]).not.toBe(await browser.getUrl());
        await browser.back();
            expect([
                'https://gcbcomputers.com/',
                'https://servers.gcbcomputers.com/'
            ]).toHaveUrl(await browser.getUrl());
    }
}

async youMayHaveMissed() {
    await this.waitForMissedBlock();
    await this.clickAllMissedLinks();
}

async gcbServersLink() {
    await this.gcbServersLinkID.click();
}

async fullMissedTest() {
    await this.openGCB();
    await this.youMayHaveMissed();
    await this.gcbServersLink();
    await this.youMayHaveMissed();

}

}


export default new GCBMayHaveMissed();