import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMenu extends Base { 
    subMenuItems(menuName) {
        return $(`//ul//a[contains(text(), "${menuName}")]`);
    };

    primaryMenuItems(menuName) {
        return $(`//ul//a[contains(text(), "${menuName}")]`);
    };

    hoverMenuItems(menuName) {
        return $(`//a[contains(text(), "${menuName}")]`);
    };    

    allMenusObject = [
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
            subMenu: [
            {
                name: '$100 or Less',         
                url:  'all100',
            },
            {
                name: '$200 or Less',
                url:  'all200',
            },
            {
                name: '$101 to $300',
                url:  'all300',
            },
            {
                name: '$201 to $500',
                url:  'all500'
            },
            {
                name: 'Over $500',
                url:  'over-500'
            },

            ]
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
            subMenu: [
                {
                    name: 'FAQ',         
                    url:  'faq',
                },
                {
                    name: 'Warranty',
                    url:  'Warranty',
                },
            ]
        },
        {
            name: 'Recycling',
            url: 'servers.gcbcomputers.com/recycling-program',
        },
        {
            name: 'GCB Servers',
            url: 'https://servers.gcbcomputers.com',
        },
        {
            name: 'Available Servers',
            url:'available-servers',
        },
        {
            name: 'Networking Solutions',
            url: 'networking-solutions',
        },
        {
            name: 'Tools',
            url: 'cameras-tools',
        },
        {
            name: 'Other Items',
            url: 'other-items',
            subMenu: [
                {
                    name: 'Parts & Accessories',
                    url: 'parts-accessories',
                },
                {
                    name: 'Drives & Devices',
                    url: 'storage-drives-devices',
                },
                {
                    name: 'Computers',
                    url: 'storage-solutions-other-items',
                },
            ]
        },
        {
            name: 'Repairs',
            url: 'repairs',
        },
        {
            name: 'Recycling Program',
            url: 'servers.gcbcomputers.com/recycling-program',
        },
        {
            name: 'GCB Layton',
            url: 'https://gcbcomputers.com',
        },
        
    ]

    async loopingMenus() {
        for (let i = 0; i < this.allMenusObject.length; i++) {
            await this.primaryMenuItems(this.allMenusObject[i].name).click();
            await expect(browser).toHaveUrl(expect.stringContaining(this.allMenusObject[i].url)),{timeout:5000};
                if (this.allMenusObject[i].name == 'Recycling') {
                    await browser.back();
                };     
                if (this.allMenusObject[i].subMenu &&
                    this.allMenusObject[i].subMenu.length > 0) {
                    await this.primaryMenuItems(this.allMenusObject[i].name).moveTo();

                    for (let j = 0; j < this.allMenusObject[i].subMenu.length; j++) {
                        await this.primaryMenuItems(this.allMenusObject[i].name).moveTo();
                        await this.subMenuItems(this.allMenusObject[i].subMenu[j].name).click();
                        await expect(browser).toHaveUrl(expect.stringContaining(this.allMenusObject[i].subMenu[j].url)),{timeout:5000};
                            if (this.allMenusObject[i].subMenu[j].name == 'Warranty') {
                                await browser.back();
                            };
                    };
                };
        };
    };

    async allMenus() {
        await this.openGCB();
        await this.loopingMenus();
    };
}

export default new GCBMenu();

