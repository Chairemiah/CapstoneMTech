import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import GCBMenu from '../pageobjects/gcbMenus.js'


describe('GCB Computers Test', () => {
    it('Testing of GCB Website - Dropdown and Menus', async () => {
        await GCBMenu.allGCBMenuItems ();
        await GCBMenu.allServersMenus();
    })
})


