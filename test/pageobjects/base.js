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






    //functions

    async homePageVerify () {
        await browser.url('https://gcbcomputers.com/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/')
    }


    open (path) {
        return browser.url('https://gcbcomputers.com/')
    }

    

}
