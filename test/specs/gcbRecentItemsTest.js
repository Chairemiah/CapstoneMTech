import GCBRecentItems from '../pageobjects/gcbRecentItems.js'


describe('GCB Computers Recent Items Test', () => {
    it('Testing of GCB Website - Recent Items and Recently Listed Test', async () => {
        await GCBRecentItems.openGCB();
        await GCBRecentItems.recentItems();
    })
})