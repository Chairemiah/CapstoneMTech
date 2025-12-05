import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBRecentItems extends Base {
  
    get trendingWrapperID () {
        return $('.trending-wrapper');
    }

    get recentItemsID () {
        return $$('.trending-content a[href*="gcbcomputers.com"]');
    }


    async recentItems () {
        // await this.trendingWrapperID;
        await this.recentItemsID.then(async (links) => {
    for (let link of links) {
        await browser.url(await link.getAttribute('href'))
        // await browser.pause(1000)
        await browser.back()
        expect([
                'https://gcbcomputers.com/',
                'https://servers.gcbcomputers.com/'
            ]).toHaveUrl(await browser.getUrl());
    }



})

}
}

export default new GCBRecentItems();
