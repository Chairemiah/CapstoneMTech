import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBGoogleMaps extends Base {

//selectors
   
    get googleMapsIframe() {
        return $('iframe[title="Google Map"]');
    }

    get viewLargerMapLink() {
        return $('a*=View larger map');
    }

    get viewLargerMapByDiv() {
        return $('.google-maps-link a');
    }

//functions

    async waitForMapsWidget() {
        await this.googleMapsIframe.waitForExist({timeout:10000})
    }

    async navigateToGoogleMaps() {
        const mapsUrl = 'https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041'
        await browser.url(mapsUrl)
    }

    async openGoogleMapsFromWidget() {
        await this.googleMapsIframe.waitForExist({timeout:10000});
        
        const mapsUrl = 'https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041'
        
        await browser.url(mapsUrl);
        
    }

    async allGoogleMaps() {
        await this.waitForMapsWidget();
        await this.navigateToGoogleMaps();
        await browser.back();
    }
}

export default new GCBGoogleMaps();