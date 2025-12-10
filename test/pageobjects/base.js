import { browser } from '@wdio/globals'


export default class Base {

    get homePage () {
        return $('//*[@href=https://gcbcomputers.com/');
    }

    get homeBtnHomePageClass () {
        return $('.current-menu-item');
    }
    
    get homeBtnClass () {
        return $('.fa fa-home')
    }

    openGCB() {
        return browser.url('https://gcbcomputers.com/')
    }

    async homePageVerify () {
        await browser.url('https://gcbcomputers.com/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/')
    }

    async homeBtnHomePage () {
        await this.homeBtnHomePageClass.click();
    }

    async homeBtn () {
        await this.homeBtnClass.click();
    }

    // async hoverForLoop(primaryMenu, subMenu) {
    //     await this.hoverMenuItems(primaryMenu).moveTo();
    //     // await this.subMenuItems(subMenu).waitForExist({timeout:3000})
    // }

    // async windowsSystemsHover () {;
    //     await this.hoverMenuItems('Windows Systems').moveTo();
    //     await this.subMenuItems('Laptops').waitForExist({timeout:3000})
    // }

    // async pricingHover() {
    //     await this.hoverMenuItems('Pricing').moveTo();
    //     await this.subMenuItems('Over $500').waitForExist({timeout:3000});
    // }

    // async ourCompanyHover() {
    //     await this.hoverMenuItems('Our Company').moveTo();
    //     await this.primaryMenuItems('Warranty').waitForDisplayed({timeout:3000});
    // }

    // async otherItemsHover() {
    //     await this.hoverMenuItems('Other Items').moveTo();
    //     await this.subMenuItems('Computers').waitForExist({timeout:3000})
    // }

}