import { $ } from '@wdio/globals'
import Base from './base.js';


//selectors
class GCBMenu extends Base {
  
    get homeBtnHomePageClass () {
        return $('.current-menu-item');
    }

    get homeBtnClass () {
        return $('.fa fa-home')
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

    get laptopsID () {
        return $('#menu-item-19534')
    }
    
    get convertablesTabletsID () {
        return $('#menu-item-41485')
    }

    get microMiniID () {
        return $('#menu-item-37925')
    }
    
    


//functions

    // async homeBtn () {
    //     await expect(this.homeBtnClass).toExist();
    // }

    async homeBtnHomePage () {
        await this.homeBtnHomePageClass.click();
    }

    async homeBtn () {
        await this.homeBtnClass.click();
    }

    async windowsSystems () {
        await this.windowsSystemsID.click();
        await browser.url('https://gcbcomputers.com/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/')
    }

    //hover function 
    async windowsSystemsHover () {
        await $('a*=Windows Systems');
        await this.windowsSystemsID.moveTo();
        await browser.pause(500);
    }

    async desktops () {
        await this.windowsSystemsHover();
        await this.desktopsID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/desktops/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/desktops/')
    }

    async gaming () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/gamers/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/gamers/')
    }

    async laptops () {
        await this.windowsSystemsHover();
        await this.laptopsID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/laptops/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/laptops/')
    }

    async convertablesTablets () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/convertibles-tablets/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/convertibles-tablets/')
    }

    async MicroMini () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/micro-mini-systems/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/micro-mini-systems/')
    }
    
    



}

export default new GCBMenu();
