import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import GCBMenu from '../pageobjects/gcbMenus.js'



describe('GCB Computers Test', () => {
    it('Testing of GCB Website - Dropdown and Menus', async () => {
        await GCBMenu.open();
        await GCBMenu.homeBtnHomePage();
        await GCBMenu.homePageVerify();
        await GCBMenu.allWindowsSystemsMenu();
        await GCBMenu.linuxOS();
        await GCBMenu.allPricingMenu();
        await GCBMenu.accessories();
        await GCBMenu.repairs();
        await GCBMenu.allOurCompanyMenu();
        await GCBMenu.open();

        


    })
})


