import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Base {
    
//selectors

    get homePage () {
        return $('//*[@href=https://gcbcomputers.com/');
    }

    get homeBtnHomePageClass () {
        return $('.current-menu-item');
    }
    
    get homeBtnClass () {
        return $('.fa fa-home')
    }



    //functions

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

    async windowsSystemsHover () {
        await $('a*=Windows Systems');
        await this.windowsSystemsID.moveTo();
        await browser.pause(500);
    }


    open (path) {
        return browser.url('https://gcbcomputers.com/')
    }

    

}
