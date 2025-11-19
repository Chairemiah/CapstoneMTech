import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import GCBMenu from '../pageobjects/gcbMenus.js'



describe('GCB Computers Test', () => {
    it('Will Test Selected Areas of GCB Website', async () => {
        await GCBMenu.open();
        await GCBMenu.homeBtn();
        await GCBMenu.homePageVerify();
        await GCBMenu.windowsSystems();
        await GCBMenu.desktops();
        await GCBMenu.gaming();
       
        
        

       
    })
})


