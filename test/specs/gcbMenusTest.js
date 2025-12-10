import GCBMenu from '../pageobjects/gcbMenus.js'


describe('GCB Computers Test', () => {
    it('Testing of GCB Website - Dropdown and Menus', async () => {
        await GCBMenu.openGCB();
        await GCBMenu.allMenus();
    })
})


