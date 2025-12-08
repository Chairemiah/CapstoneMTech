import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBRecentItems extends Base {
  
    get trendingWrapperID () {
        return $('.trending-wrapper');
    }

    get recentItemsID () {
        return $$('.trending-content a[href*="gcbcomputers.com"]');
    }


    // async recentItems () {
    //     await this.recentItemsID.then(async (links) => {
    // for (let link of links) {
    //     await browser.url(await link.getAttribute('href'))
    //     await browser.back()
    //     expect([
    //             'https://gcbcomputers.com/',
    //             'https://servers.gcbcomputers.com/'
    //         ]).toHaveUrl(await browser.getUrl());
    // }

    
//     async recentItems() {
//     for (let link of await this.recentItemsID) {
//         await link.click();
//         expect([
//             'https://gcbcomputers.com/',
//             'https://servers.gcbcomputers.com/'
//         ]).not.toBe(await browser.getUrl());
//         await browser.back();
//         expect([
//             'https://gcbcomputers.com/',
//             'https://servers.gcbcomputers.com/'
//         ]).toHaveUrl(await browser.getUrl());
//     }
// }

    async recentItems() {
    for (let link of await this.recentItemsID) {
        await link.click();
        await browser.back();
    }
}

}

export default new GCBRecentItems();
