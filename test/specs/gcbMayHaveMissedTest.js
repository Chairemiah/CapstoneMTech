import GCBMayHaveMissed from '../pageobjects/gcbMayHaveMissed.js'

describe('Testing of GCB Website - You May Have Missed/In Case You Missed It', () => {
    it('should test these sections of the website', async () => {
        await GCBMayHaveMissed.allMissed();
    })
})