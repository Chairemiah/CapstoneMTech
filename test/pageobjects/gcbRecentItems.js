import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBRecentItems extends Base {
  
    get trendingWrapperID () {
        return $('.trending-wrapper');
    }

    get recentItemsID () {
        return $$('.trending-content a[href*="gcbcomputers.com"]');
    }

    async trendingWrapper () {
        await this.trendingWrapperID;
    }

    async recentItems () {
        await this.recentItemsID.then(async (links) => {
    for (let link of links) {
        await browser.url(await link.getAttribute('href'))
        await browser.pause(1000)
        await browser.back()
        await browser.pause(1000)
    }

})

}
}

export default new GCBRecentItems();
