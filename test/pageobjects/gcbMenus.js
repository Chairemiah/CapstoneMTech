import { $ } from '@wdio/globals'
import Base from './base.js';


//selectors
class GCBMenu extends Base {
  
    //Windows Systems Dropdown Getters
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
    

    //Linux OS
    get linuxOSID () {
        return $('#menu-item-45254')
    }

    //Pricing Dropdown Getters
    get pricingID () {
        return $('#menu-item-20481')
    }

    get oneOrLessID () {
        return $('#menu-item-20482')
    }

    get twoOrLessID () {
        return $('#menu-item-20484')
    }

    get oneToThreeID () {
        return $('#menu-item-20483')
    }
    
    get twoToFiveID () {
        return $('#menu-item-20485')
    }

    get overFiveID () {
        return $('#menu-item-20486')
    }

    //Accessories
    get accessoriesID () {
        return $('#menu-item-321')
    }

    //Repairs
    get repairsID () {
        return $('#menu-item-21')
    }

    //Our Company
    get ourCompanyID () {
        return $('#menu-item-20474')
    }
    
    //FAQ
    get faqID () {
        return $('#menu-item-41680')
    }

    get warrantyID () {
        return $('#menu-item-33410')
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


    //hover function 
    async windowsSystemsHover () {
        await $('a*=Windows Systems');
        await this.windowsSystemsID.moveTo();
        await browser.pause(500);
    }

    //Windows Dropdown
    async windowsSystems () {
        await this.windowsSystemsID.click();
        await browser.url('https://gcbcomputers.com/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/');
    }

    async desktops () {
        await this.windowsSystemsHover();
        await this.desktopsID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/desktops/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/desktops/');
    }

    async gaming () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/gamers/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/gamers/');
    }

    async laptops () {
        await this.windowsSystemsHover();
        await this.laptopsID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/laptops/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/laptops/');
    }

    async convertablesTablets () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/convertibles-tablets/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/convertibles-tablets/');
    }

    async microMini () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/micro-mini-systems/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/micro-mini-systems/');
    }

    //ALL Windows Systems Functions in one
    async allWindowsSystemsMenu () {
        await this.windowsSystems();
        await this.desktops();
        await this.gaming();
        await this.laptops();
        await this.convertablesTablets();
        await this.microMini();
    }


    //Linux OS
    async linuxOS () {
        await this.linuxOSID.click();
        await browser.url('https://gcbcomputers.com/windows-systems/micro-mini-systems/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/micro-mini-systems/');   
    }
    
    //Pricing Dropdown
     async pricingHover () {
        await $('a*=Pricing');
        await this.pricingID.moveTo();
        await browser.pause(500);
    }
    
    async pricing () {
        await this.pricingID.click();
        await browser.url('https://gcbcomputers.com/computer/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/');
    }

    async oneOrLess () {
        await this.pricingHover();
        await this.oneOrLessID.click();
        await browser.url('https://gcbcomputers.com/computer/all100');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all100/');
    }

    async twoOrLess () {
        await this.pricingHover();
        await this.twoOrLessID.click();
        await browser.url('https://gcbcomputers.com/computer/all200');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all200/');
    }
  
    async oneToThree () {
        await this.pricingHover();
        await this.oneToThreeID.click();
        await browser.url('https://gcbcomputers.com/computer/all300');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all300/');
    }
    
    async twoToFive () {
        await this.pricingHover();
        await this.twoToFiveID.click();
        await browser.url('https://gcbcomputers.com/computer/all500');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all500/');
    }

    async overFive () {
        await this.pricingHover();
        await this.overFiveID.click();
        await browser.url('https://gcbcomputers.com/computer/computers-over-500/');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/computers-over-500/');
    }

    async allPricingMenu () {
        await this.pricing();
        await this.oneOrLess();
        await this.twoOrLess();
        await this.oneToThree();
        await this.twoToFive();
        await this.overFive();
    }

    //Accessories Btn
    async accessories () {
        await this.accessoriesID.click();
        await browser.url('https://gcbcomputers.com/parts');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/parts/');
    }

    //Repairs Btn
    async repairs () {
        await this.repairsID.click();
        await browser.url('https://gcbcomputers.com/about');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/about/');
    }

    //Our Company Dropdown
    async ourCompanyHover () {
        await $('a*=Our Company');
        await this.ourCompanyID.moveTo();
        await browser.pause(500);
    }
    
    async ourCompany () {
        await this.ourCompanyID.click();
        await browser.url('https://gcbcomputers.com/parts');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/parts/');
    }

    //FAQ Btn
    async faq () {
        await this.ourCompanyHover();
        await this.faqID.click();
        await browser.url('https://gcbcomputers.com/our-company/faq');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/our-company/faq/');
    }

    async warranty () {
        await this.ourCompanyHover();
        await this.warrantyID.click();
        await browser.url('https://gcbcomputers.com/wp-content/uploads/2025/02/Warranty.pdf');
        await expect(browser).toHaveUrl('https://gcbcomputers.com/wp-content/uploads/2025/02/Warranty.pdf');

    }

    async allOurCompanyMenu () {
        await this.ourCompany();
        await this.faq();
        await this.warranty();
    }


}

export default new GCBMenu();

