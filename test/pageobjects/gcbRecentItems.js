import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBRecentItems extends Base {
  
//selectors
    // get trendingWrapperID () {
    //     return $('.trending-wrapper');
    // }

    get recentItemsID () {
        return $$('.trending-content a[href*="gcbcomputers.com"]');
    }

//functions
    async recentItems() {
    for (let link of await this.recentItemsID) {
        await link.click();
        await browser.back();
    }
}

}

export default new GCBRecentItems();
