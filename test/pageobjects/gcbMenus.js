import { $ } from '@wdio/globals'
import Base from './base.js';


//selectors
class GCBMenu extends Base {
  
    //Windows Systems Dropdown Getters
    get homeBtnHomePageClass () {
        return $('.current-menu-item');
    }

    get homeBtnClass () {
        return $('.fa fa-home');
    }
   
    get windowsSystemsID () {
        return $('#menu-item-33655');
    }

    get windowsSystemsUrl () {
        return $('https://gcbcomputers.com/windows-systems/');
    }

    get desktopsID () {
        return $('#menu-item-19533');
    }

    get gamingID () {
        return $('#menu-item-19535');
    }

    get laptopsID () {
        return $('#menu-item-19534');
    }
    
    get convertablesTabletsID () {
        return $('#menu-item-41485');
    }

    get microMiniID () {
        return $('#menu-item-37925');
    }
    

    //Linux OS
    get linuxOSID () {
        return $('#menu-item-45254');
    }

    //Pricing Dropdown Getters
    get pricingID () {
        return $('#menu-item-20481');
    }

    get oneOrLessID () {
        return $('#menu-item-20482');
    }

    get twoOrLessID () {
        return $('#menu-item-20484');
    }

    get oneToThreeID () {
        return $('#menu-item-20483');
    }
    
    get twoToFiveID () {
        return $('#menu-item-20485');
    }

    get overFiveID () {
        return $('#menu-item-20486');
    }

    //Accessories
    get accessoriesID () {
        return $('#menu-item-321');
    }

    //Repairs
    get repairsID () {
        return $('#menu-item-21');
    }

    //Our Company
    get ourCompanyID () {
        return $('#menu-item-20474');
    }
    
    //FAQ
    get faqID () {
        return $('#menu-item-20487');
    }

    get warrantyID () {
        return $('#menu-item-33410');
    }

    get recyclingID () {
        return $('#menu-item-41680');
    }

    get gcbServersID () {
        return $('#menu-item-19927');
    }

    get recentItemsID () {
        return $('.trending-wrapper')
    }

    get gcbLaytonHomeID () {
        return $('#menu-item-4361')
    }


    //GCB Servers Webpage
    get gcbServersHomeBtnID () {
        return $('.current-menu-item')
    }

    get gcbServersFromLaytonID () {
        return $('.menu-item-19927')
    }

    get availableServersID () {
        return $('#menu-item-13148')
    }

    get networkingSolutionsID () {
        return $('#menu-item-13147')
    }

    get toolsID () {
        return $('#menu-item-18023')
    }

    //Other Items Dropdown
    get otherItemsID () {
        return $('#menu-item-13143')
    }

    get partsAccessoriesID () {
        return $('#menu-item-13144')
    }

    get drivesDevicesID () {
        return $('#menu-item-13145')
    }

    get computersID () {
        return $('#menu-item-13146')
    }

    get serversRepairsID () {
        return $('#menu-item-13142')
    }

    get serversRecyclingID () {
        return $('#menu-item-13375')
    }




//functions


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
        await this.laptopsID.waitForExist({ timeout: 2000 });
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
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/desktops/');
    }

    async gaming () {
        await this.windowsSystemsHover();
        await this.gamingID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/gamers/');
    }

    async laptops () {
        await this.windowsSystemsHover();
        await this.laptopsID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/laptops/');
    }

    async convertablesTablets () {
        await this.windowsSystemsHover();
        await this.convertablesTabletsID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/windows-systems/convertibles-tablets/');
    }

    async microMini () {
        await this.windowsSystemsHover();
        await this.microMiniID.click();
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
        await expect(browser).toHaveUrl('https://gcbcomputers.com/linux-zorin-systems/');   
    }
    
    //Pricing Dropdown
     async pricingHover () {
        await $('a*=Pricing');
        await this.pricingID.moveTo();
        await this.overFiveID.waitForExist({ timeout: 2000 });
    }
    
    async pricing () {
        await this.pricingID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/');
    }

    async oneOrLess () {
        await this.pricingHover();
        await this.oneOrLessID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all100/');
    }

    async twoOrLess () {
        await this.pricingHover();
        await this.twoOrLessID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all200/');
    }
  
    async oneToThree () {
        await this.pricingHover();
        await this.oneToThreeID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all300/');
    }
    
    async twoToFive () {
        await this.pricingHover();
        await this.twoToFiveID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/all500/');
    }

    async overFive () {
        await this.pricingHover();
        await this.overFiveID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/computer/computers-over-500/');
    }

    //ALL Pricing Functions in one
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
        await expect(browser).toHaveUrl('https://gcbcomputers.com/parts/');
    }

    //Repairs Btn
    async repairs () {
        await this.repairsID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/about/');
    }

    //Our Company Dropdown
    async ourCompanyHover () {
        await $('a*=Our Company');
        await this.ourCompanyID.moveTo();
        // await browser.pause(1000);
        await this.warrantyID.waitForDisplayed({timeout:2000})
    }
    
    async ourCompany () {
        await this.ourCompanyID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/our-company/');
    }

    //FAQ Btn
    async faq () {
        await this.ourCompanyHover();
        await this.faqID.click();
        await expect(browser).toHaveUrl('https://gcbcomputers.com/our-company/faq/');
    }

    async warranty () {
        await this.ourCompanyHover();
        await this.warrantyID.click();
        // await browser.pause(1000);
        await expect(browser).toHaveUrl('https://gcbcomputers.com/wp-content/uploads/2025/02/Warranty.pdf');
    }

    //ALL Our Company Functions in one
    async allOurCompanyMenu () {
        await this.ourCompany();
        await this.faq();
        await this.warranty();
    }

    async recycling () {
        await this.recyclingID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/recycling-program/');
    }

    async gcbServers () {
        await this.gcbServersID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/');
    }



    //ALL GCB MENUS IN ONE 
    async allGCBMenuItems () {
        await this.openGCB();
        await this.homeBtnHomePage();
        await this.homePageVerify();
        await this.allWindowsSystemsMenu();
        await this.linuxOS();
        await this.allPricingMenu();
        await this.accessories();
        await this.repairs();
        await this.allOurCompanyMenu();
        await browser.back();
        await this.recycling();
        await this.gcbLaytonHome();
        await this.gcbServers();
    }



    async gcbLaytonHome () {
        await this.gcbLaytonHomeID.click();
    }

    async gcbServersFromLayton () {
        await this.gcbServersFromLaytonID.click();
    }

    async gcbServersHomeBtn () {
        await this.gcbServersHomeBtnID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/');
    }

    async availableServers () {
        await this.availableServersID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/available-servers/');
    }

    async networkingSolutions () {
        await this.networkingSolutionsID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/networking-solutions/');
    }

    async tools () {
        await this.toolsID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/cameras-tools/');
    }
    
    //Other Items Hover Function
    async otherItemsHover () {
        await $('a*=Other Items');
        await this.otherItemsID.moveTo();
        // await browser.pause(1000);
        await this.computersID.waitForExist({timeout:2000})
    }

    async otherItems () {
        await this.otherItemsID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/other-items-pcs-drives-parts-accessories/')
    }

    async partsAccessories () {
        await this.otherItemsHover();
        await this.partsAccessoriesID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/other-items-pcs-drives-parts-accessories/parts-accessories/')
    }

    async drivesDevices () {
        await this.otherItemsHover();
        await this.drivesDevicesID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/other-items-pcs-drives-parts-accessories/storage-drives-devices/')
    }

    async computers () {
        await this.otherItemsHover();
        await this.computersID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/other-items-pcs-drives-parts-accessories/storage-solutions-other-items/')
    }

    async allOtherItems () {
        await this.otherItems();
        await this.partsAccessories();
        await this.drivesDevices();
        await this.computers();
    }

    async serversRepairs () {
        await this.serversRepairsID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/repairs/')
    }

    async serversRecycling () {
        await this.serversRecyclingID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/recycling-program/')
    }

    async allServersMenus () {
        await this.gcbServersHomeBtn();
        await this.availableServers();
        await this.networkingSolutions();
        await this.tools();
        await this.allOtherItems();
        await this.serversRepairs();
        await this.serversRecycling();
    }

}

export default new GCBMenu();

