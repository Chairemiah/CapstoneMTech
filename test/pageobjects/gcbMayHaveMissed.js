import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBMayHaveMissed extends Base {
  
    get inCaseYouMissedItID () {
        return $('.ct-missed-block widget');

    }

    get youMayHaveMissedID () {
        return $('.container-inner');
    }

    async youMayHaveMissed () {
        await $('.ct-missed-block').waitForExist({ timeout: 5000 })
        await $$('.ct-grid-post-list h3.post-title a').then(async (links) => {
    for (let link of links) {
        await browser.url(await link.getAttribute('href'))
        await browser.pause(2000)
        await browser.back()
        await browser.pause(1000)
    }
})
    }


}


export default new GCBMayHaveMissed();