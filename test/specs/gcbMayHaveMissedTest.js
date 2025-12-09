import GCBMayHaveMissed from '../pageobjects/gcbMayHaveMissed.js'


describe('GCB Computers Test', () => {
    it('Testing of GCB Website - You May Have Missed and In Case You Missed It', async () => {
        await GCBMayHaveMissed.allMissed();
    })
})