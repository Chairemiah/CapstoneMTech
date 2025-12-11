import { $ } from '@wdio/globals'
import Base from './base.js';

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