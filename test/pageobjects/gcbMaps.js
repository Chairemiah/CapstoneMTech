import { $ } from '@wdio/globals'
import Base from './base.js';

// class GCBGoogleMaps extends Base {

// //selectors
   
//     get googleMapsIframe() {
//         return $('iframe[title="Google Map"]');
//     }

//     get viewLargerMapLink() {
//         return $('a*=View larger map');
//     }

//     get viewLargerMapByDiv() {
//         return $('.google-maps-link a');
//     }

//     get googleMapsUrlID() {
//         return browser.url('https://www.google.com/maps/place/1155+N+Main+St,+Layton,+UT+84041/@41.0771,-111.984992,12z/data=!4m6!3m5!1s0x875303bc89dff02f:0xa5031aabc474588a!8m2!3d41.0770998!4d-111.9849925!16s%2Fg%2F11bw3x8fsq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D')
//     }

// // //functions

// //     async waitForMapsWidget() {
// //         await this.googleMapsIframe.waitForExist({timeout:10000});
// //     }

// //     async googleMapsUrl() {
// //         await this.googleMapsUrlID();
// //     }


// //     async allGoogleMaps() {
// //         await this.waitForMapsWidget();
// //         await browser.url('https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041')
// //         await expect(browser).toHaveUrl(expect.stringContaining('1155+N+Main+St,+Layton,+UT+84041'))
// //         await browser.back();
// //         await expect(browser).toHaveUrl('https://gcbcomputers.com/')

// //     } 


// }


// export default new GCBGoogleMaps();

class GCBComputersPage extends Base {
    // Google Maps Widget Selectors
    get mapsIframe() {
        return $('iframe[title="Google Map"]');
    }
    
    get viewLargerMapLink() {
        return $('a[aria-label="View larger map"]');
    }
    
    // Actions
    async open() {
        await browser.url('https://gcbcomputers.com/');
    }
    
    async scrollToMap() {
        // Scroll halfway down the page
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight / 2);
        });
        await browser.pause(2000); // Wait for map to load
    }
    
    async clickViewLargerMap() {
        // Wait for iframe to be present
        await this.mapsIframe.waitForExist({ timeout: 15000 });
        
        // Switch to the Google Maps iframe using the element directly
        await browser.switchFrame(await this.mapsIframe);
        
        // Wait for the link to be clickable inside the iframe
        await this.viewLargerMapLink.waitForClickable({ timeout: 15000 });
        
        // Click the link
        await this.viewLargerMapLink.click();
        
        // Switch back to top level frame
        await browser.switchFrame(null);
        
        // Wait a moment for the new tab to open
        await browser.pause(2000);
    }
    
    async verifyNewTabOpened() {
        const handles = await browser.getWindowHandles();
        return handles.length > 1;
    }
    
    async switchToNewTab() {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.switchToWindow(handles[1]);
        }
    }
    
    async closeNewTabAndReturnToMain() {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);
        }
    }
}

export default new GCBComputersPage();