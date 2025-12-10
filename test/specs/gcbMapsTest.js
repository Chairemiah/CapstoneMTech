import GCBComputersPage from '../pageobjects/gcbMaps.js';

describe('GCB Computers - Google Maps Widget Tests', () => {
    
    beforeEach(async () => {
        // Navigate to the homepage before each test
        await GCBComputersPage.open();
    });
    
    it('should display the Google Maps widget on homepage', async () => {
        // Scroll to the map widget area
        await GCBComputersPage.scrollToMap();
        
        // Verify the iframe exists
        await expect(GCBComputersPage.mapsIframe).toBeExisting();
    });
    
    it('should click View larger map link and open Google Maps in new tab', async () => {
        // Scroll to the map widget area
        await GCBComputersPage.scrollToMap();
        
        // Click the View larger map link
        await GCBComputersPage.clickViewLargerMap();
        
        // Verify new tab was opened
        const newTabOpened = await GCBComputersPage.verifyNewTabOpened();
        expect(newTabOpened).toBe(true);
        
        // Switch to the new tab
        await GCBComputersPage.switchToNewTab();
        
        // Verify the URL contains Google Maps
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('google.com/maps');
        
        // Close the new tab and return to main window
        await GCBComputersPage.closeNewTabAndReturnToMain();
    });
    
});