import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMenu extends Base { 
    get gcbServersHomeBtnID() {
        return $('.current-menu-item')
    }

    subMenuItems(menuName) {
        return $(`//ul[@class="sub-menu"]//a[contains(text(), "${menuName}")]`)
    }
                // remove attribute "class/id" and have just one selector
    primaryMenuItems(menuName) {
        return $(`//ul[@id="primary-menu"]//a[contains(text(), "${menuName}")]`)
    }

    hoverMenuItems(menuName) {
        return $(`//a[contains(text(), "${menuName}")]`)
    }

    menuNamesArray = [
        'Windows Systems',
        'Desktops',
        'Gaming',
        'Laptops',
        'Convertibles & Tablets',
        'Micro/Mini',
        'Linux OS',
        'Pricing',
        '$100 or Less',
        '$200 or Less',
        '$101 to $300',
        '$201 to $500',
        'Over $500',
        'Accessories',
        'Repairs',
        'Our Company',
        'FAQ',
        'Warranty',
        'Recycling',
        'GCB Servers',
        'GCB Layton',
        'GCB Servers',
        'Available Servers',
        'Networking Solutions',
        'Tools',
        'Other Items',
        'Parts & Accessories',
        'Drives & Devices',
        'Computers',
        'Repairs',
        'Recycling Program',
    ]


    subMenuNamesArray = []

    

    primaryMenuNamesObject = [
        {
            name: 'Windows Systems',
            url: 'gcbcomputers',
            subMenu: [
                {
                    name: 'Desktops',
                    url:  'desktops',
                },
                {
                    name: 'Gaming',
                    url:  'gamers',
                },
                {
                    name: 'Laptops',
                    url:  'laptops',
                },
                {
                    name: 'Convertibles & Tablets',
                    url:  'convertibles-tablets',
                },
                {
                    name: 'Micro/Mini',
                    url:  'micro-mini-systems',
                },

            ]
        
        },
        {
            name: 'Linux OS',
            url: 'linux',
        },
        {
            name: 'Pricing',
            url: 'computer',
        },
        {
            name: 'Accessories',
            url: 'parts',
        },
        {
            name: 'Repairs',
            url: 'about',
        },
        {
            name: 'Our Company',
            url: 'our-company',
        },
        {
            name: 'Recycling',
            url: 'recycling',
        },
        {
            name: 'GCB Servers',
            url: 'servers.gcb',
        }
        
    ]

    async loopingMenus() {
        for (let i = 0; i < this.primaryMenuNamesObject.length; i++) {
            await this.primaryMenuItems(this.primaryMenuNamesObject[i].name).moveTo(); //Don't need this for Primary, use for subMenus
            await this.primaryMenuItems(this.primaryMenuNamesObject[i].name).click();
            await expect(browser).toHaveUrl(expect.stringContaining(this.primaryMenuNamesObject[i].url));
            if (i == 6) {
                await browser.back();
            }
        }
    }

    


    async windowsSystems() {
        await this.primaryMenuItems('Windows Systems').click();
        await browser.url('https://gcbcomputers.com/');
    }

    async desktops() {
        await this.windowsSystemsHover();
        await this.subMenuItems('Desktops').click();
        await expect(browser).toHaveUrl(expect.stringContaining('desktops'));
    }

    async gaming() {
        await this.windowsSystemsHover();
        await this.subMenuItems('Gaming').click();
        await expect(browser).toHaveUrl(expect.stringContaining('gamers'));
    }

    async laptops() {
        await this.windowsSystemsHover();
        await this.subMenuItems('Laptops').click();
        await expect(browser).toHaveUrl(expect.stringContaining('laptops'));
    }

    async convertiblesTablets() {
        await this.windowsSystemsHover();
        await this.subMenuItems('Convertibles & Tablets').click();
        await expect(browser).toHaveUrl(expect.stringContaining('convertibles-tablets'));
    }

    async microMini() {
        await this.windowsSystemsHover();
        await this.subMenuItems('Micro/Mini').click();
        await expect(browser).toHaveUrl(expect.stringContaining('micro-mini-systems'));
    }

    async allWindowsSystemsMenu() {
        await this.windowsSystems();
        await this.desktops();
        await this.gaming();
        await this.laptops();
        await this.convertiblesTablets();
        await this.microMini();
    }

    async linuxOS() {
        await this.primaryMenuItems('Linux OS').click();
        await expect(browser).toHaveUrl(expect.stringContaining('linux'));  
    }
    
    async pricing() {
        await this.primaryMenuItems('Pricing').click();
        await expect(browser).toHaveUrl(expect.stringContaining('computer'));
    }

    async oneOrLess() {
        await this.pricingHover();
        await this.subMenuItems('$100 or Less').click();
        await expect(browser).toHaveUrl(expect.stringContaining('all100'));
    }

    async twoOrLess() {
        await this.pricingHover();
        await this.subMenuItems('$200 or Less').click();
        await expect(browser).toHaveUrl(expect.stringContaining('all200'));
    }
  
    async oneToThree() {
        await this.pricingHover();
        await this.subMenuItems('$101 to $300').click();
        await expect(browser).toHaveUrl(expect.stringContaining('all300'));
    }
    
    async twoToFive() {
        await this.pricingHover();
        await this.subMenuItems('$201 to $500').click();
        await expect(browser).toHaveUrl(expect.stringContaining('all500'));
    }

    async overFive() {
        await this.pricingHover();
        await this.subMenuItems('Over $500').click();
        await expect(browser).toHaveUrl(expect.stringContaining('over-500'));
    }

    async allPricingMenu() {
        await this.pricing();
        await this.oneOrLess();
        await this.twoOrLess();
        await this.oneToThree();
        await this.twoToFive();
        await this.overFive();
    }
    async accessories() {
        
        await this.primaryMenuItems('Accessories').click();
        await expect(browser).toHaveUrl(expect.stringContaining('parts'));
    }

    async repairs() {
        await this.primaryMenuItems('Repairs').click();
        await expect(browser).toHaveUrl(expect.stringContaining('about'));
    }
    
    async ourCompany() {
        await this.primaryMenuItems('Our Company').click();
        await expect(browser).toHaveUrl(expect.stringContaining('our-company'));
    }

    async faq() {
        await this.ourCompanyHover();
        await this.subMenuItems('FAQ').click();
        await expect(browser).toHaveUrl(expect.stringContaining('faq'));
    }

    async warranty() {
        await this.ourCompanyHover();
        await this.subMenuItems('Warranty').click();
        await expect(browser).toHaveUrl(expect.stringContaining('Warranty'));
    }
    async allOurCompanyMenu() {
        await this.ourCompany();
        await this.faq();
        await this.warranty();
    }

    async recycling() {
        await this.primaryMenuItems('Recycling').click();
        await expect(browser).toHaveUrl(expect.stringContaining('recycling'));
    }   


    async gcbServers() {
        await this.primaryMenuItems('GCB Servers').click();
        await expect(browser).toHaveUrl(expect.stringContaining('servers.gcb'));
    }

    async allGCBMenuItems() {
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

    async gcbLaytonHome() {
        await this.primaryMenuItems('GCB Layton').click();
    }

    async gcbServersFromLayton() {
        await this.primaryMenuItems('GCB Servers').click();
    }

    async gcbServersHomeBtn() {
        await this.gcbServersHomeBtnID.click();
        await expect(browser).toHaveUrl('https://servers.gcbcomputers.com/');
    }

    async availableServers() {
        await this.primaryMenuItems('Available Servers').click();
        await expect(browser).toHaveUrl(expect.stringContaining('available-servers'));
    }

    async networkingSolutions() {
        await this.primaryMenuItems('Networking Solutions').click();
        await expect(browser).toHaveUrl(expect.stringContaining('networking-solutions'));
    }

    async tools() {
        await this.primaryMenuItems('Tools').click();
        await expect(browser).toHaveUrl(expect.stringContaining('cameras-tools'));
    }
    
    async otherItems() {
        await this.primaryMenuItems('Other Items').click();
        await expect(browser).toHaveUrl(expect.stringContaining('other-items-pcs-drives-parts-accessories'));
    }

    async partsAccessories() {
        await this.otherItemsHover();
        await this.subMenuItems('Parts & Accessories').click();
        await expect(browser).toHaveUrl(expect.stringContaining('accessories/parts-accessories'));
    }

    async drivesDevices() {
        await this.otherItemsHover();
        await this.subMenuItems('Drives & Devices').click();
        await expect(browser).toHaveUrl(expect.stringContaining('accessories/storage-drives-devices'));
    }

    async computers() {
        await this.otherItemsHover();
        await this.subMenuItems('Computers').click();
        await expect(browser).toHaveUrl(expect.stringContaining('accessories/storage-solutions-other-items'));
    }

    async allOtherItems() {
        await this.otherItems();
        await this.partsAccessories();
        await this.drivesDevices();
        await this.computers();
    }

    async serversRepairs() {
        await this.primaryMenuItems('Repairs').click();
        await expect(browser).toHaveUrl(expect.stringContaining('repairs'));
    }

    async serversRecycling() {
        await this.primaryMenuItems('Recycling Program').click();
        await expect(browser).toHaveUrl(expect.stringContaining('recycling-program'));
    }

    async allServersMenus() {
        await this.gcbServersHomeBtn();
        await this.availableServers();
        await this.networkingSolutions();
        await this.tools();
        await this.allOtherItems();
        await this.serversRepairs();
        await this.serversRecycling();
    }

    async allMenus() {
        // await this.allGCBMenuItems();
        // await this.allServersMenus();
        await this.loopingMenus();
    }
}

export default new GCBMenu();

