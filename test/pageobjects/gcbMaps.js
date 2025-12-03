// import { $ } from '@wdio/globals'
// import Base from './base.js';

// class GoogleMapsWidget extends Base {
//     constructor() {
//         super();
//     }

//     // Selectors
//     get mapIframe() {
//         return $('iframe[src*="google.com/maps"]');
//     }

//     get viewLargerMapLink() {
//         return $('a*=View larger map');
//     }

//     get viewLargerMapByDiv() {
//         return $('.google-maps-link a');
//     }

//     // Actions
//     async openGCB() {
//         await super.open('https://gcbcomputers.com/');
//     }

//     async scrollToMap() {
//         const iframe = await this.mapIframe;
//         await iframe.scrollIntoView();
//         await browser.pause(2000); // Give map time to load
//     }

//     async clickViewLargerMap() {
//         // Scroll to ensure map is visible
//         await this.scrollToMap();

//         // Switch to the Google Maps iframe
//         const iframe = await this.mapIframe;
//         await browser.switchToFrame(iframe);
        
//         // Wait longer for the iframe content to load
//         await browser.pause(2000);

//         // Try multiple selectors
//         let viewLargerMap;
//         try {
//             viewLargerMap = await this.viewLargerMapLink;
//             await viewLargerMap.waitForClickable({ timeout: 10000 });
//         } catch (e) {
//             // Try alternative selector
//             viewLargerMap = await this.viewLargerMapByDiv;
//             await viewLargerMap.waitForClickable({ timeout: 10000 });
//         }
        
//         // Click the link
//         await viewLargerMap.click();

//         // Switch back to main content
//         await browser.switchToParentFrame();
//     }

//     async verifyGoogleMapsRedirect() {
//         // Wait for new window/tab to open
//         await browser.pause(3000);

//         // Get all window handles
//         const handles = await browser.getWindowHandles();

//         // Switch to the new window (Google Maps)
//         await browser.switchToWindow(handles[handles.length - 1]);

//         // Wait for page to load
//         await browser.pause(2000);

//         // Get the current URL
//         const currentUrl = await browser.getUrl();

//         // Verify the URL contains the address components
//         const containsStreetNumber = currentUrl.includes('1155');
//         const containsStreet = currentUrl.includes('Main') || currentUrl.includes('N+Main');
//         const containsCity = currentUrl.includes('Layton');
//         const containsZip = currentUrl.includes('84041');
//         const isGoogleMaps = currentUrl.includes('google.com/maps');

//         const isValid = containsStreetNumber && containsStreet && containsCity && containsZip && isGoogleMaps;

//         return {
//             url: currentUrl,
//             isValid: isValid,
//             details: {
//                 hasStreetNumber: containsStreetNumber,
//                 hasStreet: containsStreet,
//                 hasCity: containsCity,
//                 hasZip: containsZip,
//                 isGoogleMaps: isGoogleMaps
//             }
//         };
//     }

//     async closeGoogleMapsTab() {
//         // Close the current tab (Google Maps)
//         await browser.closeWindow();

//         // Switch back to the original window
//         const handles = await browser.getWindowHandles();
//         await browser.switchToWindow(handles[0]);
//     }
// }

// export default new GoogleMapsWidget();