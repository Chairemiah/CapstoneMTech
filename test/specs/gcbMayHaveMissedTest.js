import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import GCBMayHaveMissed from '../pageobjects/gcbMayHaveMissed.js'




describe('GCB Computers Test', () => {
    it('Testing of GCB Website - Dropdown and Menus', async () => {
        await GCBMayHaveMissed.openGCB();
        await GCBMayHaveMissed.youMayHaveMissed();
      
    })
})