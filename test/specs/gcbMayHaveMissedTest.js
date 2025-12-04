import { expect } from '@wdio/globals'
import GCBMayHaveMissed from '../pageobjects/gcbMayHaveMissed.js'


describe('GCB Computers Test', () => {
    it('Testing of GCB Website - Dropdown and Menus', async () => {
        await GCBMayHaveMissed.openGCB();
        await GCBMayHaveMissed.youMayHaveMissed();
    })
})