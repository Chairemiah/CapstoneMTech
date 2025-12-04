import { expect } from '@wdio/globals'
import GCBRecentItems from '../pageobjects/gcbRecentItems.js'


describe('GCB Computers Recent Items Test', () => {
    it('Testing of GCB Website - Recent Items/Scrolling Banner', async () => {
        await GCBRecentItems.openGCB();
        await GCBRecentItems.trendingWrapper();
        await GCBRecentItems.recentItems();
    })
})