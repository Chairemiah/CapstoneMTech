import GCBRecentItems from '../pageobjects/gcbRecentItems.js'

describe('GCB Computers Recent Items Test', () => {
    it('should test the recent items and recently listed components', async () => {
        await GCBRecentItems.allRecentItems();
    })
})