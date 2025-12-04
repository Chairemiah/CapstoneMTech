// import { expect } from '@wdio/globals'
// import GCBMenu from '../pageobjects/gcbMenus.js'
// import GoogleMapsWidget from '../pageobjects/gcbMaps.js'


// describe('Google Maps Widget Test', () => {
//     it('should click View larger map and verify redirect to correct address', async () => {
        
//         // Open GCB
//         await GoogleMapsWidget.openGCB();
        
//         // Click "View larger map" in the widget
//         await GoogleMapsWidget.clickViewLargerMap();
        
//         // Verify the redirect to Google Maps with correct address
//         const result = await GoogleMapsWidget.verifyGoogleMapsRedirect();
        
//         // Log the results
//         console.log(`Redirected to: ${result.url}`);
//         console.log('Validation details:', result.details);
        
//         // Assertions
//         expect(result.isValid).toBe(true);
//         expect(result.url).toContain('google.com/maps');
//         expect(result.url).toContain('1155');
//         expect(result.url).toContain('Layton');
//         expect(result.url).toContain('84041');
        
//         // Clean up - close Google Maps tab and return to main window
//         await GoogleMapsWidget.closeGoogleMapsTab();
//     });

//     it('should verify View larger map link is present', async () => {
//         await GoogleMapsWidget.open();
        
//         await GoogleMapsWidget.scrollToMap();
        
//         // Switch to iframe
//         await browser.switchToFrame(await GoogleMapsWidget.mapIframe);
        
//         // Check if link exists
//         const link = await GoogleMapsWidget.viewLargerMapLink;
//         await link.waitForDisplayed({ timeout: 5000 });
        
//         const linkText = await link.getText();
//         expect(linkText).toBe('View larger map');
        
//         // Switch back
//         await browser.switchToParentFrame();
//     });
// });