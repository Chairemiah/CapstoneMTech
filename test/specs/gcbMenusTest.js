import GCBMenu from '../pageobjects/gcbMenus.js'


describe('Testing of GCB Website - Dropdown and Menus', () => {
    it('should test all dropdown menus', async () => {
        await GCBMenu.allMenus();
    })
})


