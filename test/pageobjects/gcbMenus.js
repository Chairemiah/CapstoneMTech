import { $ } from '@wdio/globals'
import Base from './base.js';


//selectors
class GCBMenu extends Base {
  
    get homeBtnClass () {
        return $('.current-menu-item');
    }

   
    get windowsSystemsID () {
        return $('#menu-item-33655')
    }

    get windowsSystemsUrl () {
        return $('https://gcbcomputers.com/windows-systems/')
    }

    get desktopsID () {
        return $('#menu-item-19533')
    }

    get gamingID () {
        return $('#menu-item-19535')
    }
    
    
    


//functions

    async homeBtn () {
        await expect(this.homeBtnClass).toExist();
    }

    async windowsSystems () {
        await this.windowsSystemsID.click();
        await browser.url('https://gcbcomputers.com/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/')
    }

    async desktops () {
        await this.desktopsID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/desktops/');
        await expect(broswer).toHaveUrl('https://gcbcomputers.com/windows-systems/desktops/')
    }

    async gaming () {
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/gamers/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/gamers/')
    }

    



}

export default new GCBMenu();
