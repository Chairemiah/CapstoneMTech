import { browser } from '@wdio/globals'


export default class Base {
    openGCB() {
        return browser.url('https://gcbcomputers.com/')
    }

    openGCBServers() {
        return browser.url('https://servers.gcbcomputers.com/')
    }

    async homePageVerify () {
        await browser.url('https://gcbcomputers.com/')
        await expect(browser).toHaveUrl('https://gcbcomputers.com/')
    }

    
}