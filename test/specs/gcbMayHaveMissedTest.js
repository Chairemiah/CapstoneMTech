import GCBMayHaveMissed from '../pageobjects/gcbMayHaveMissed.js'

describe('Testing of GCB Website - You May Have Missed/In Case You Missed It', () => {
    it('should fully test these components', async () => {
        await GCBMayHaveMissed.allMissed();
    })
})