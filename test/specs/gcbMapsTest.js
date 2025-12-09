import { expect } from '@wdio/globals'
import GCBMenu from '../pageobjects/gcbMenus.js'
import GoogleMapsWidget from '../pageobjects/gcbMaps.js'


describe('Google Maps Widget Test', () => {
    it('Testing of GCB Website - Google Maps Widget', async () => {

        //open GCB
    await GoogleMapsWidget.openGCB();



   // Navigate to the page
await browser.url('https://gcbcomputers.com')

// Wait for iframe
await $('iframe[title="Google Map"]').waitForExist({ timeout: 10000 })


// Switch to iframe
await browser.switchToFrame(await $('iframe[title="Google Map"]'))


// Wait longer for map to load
await browser.pause(5000)


// Get the entire iframe HTML
const iframeHTML = await browser.getPageSource()


// Check what elements exist
const allDivs = await $$('div')


const allLinks = await $$('a')


// Try to find the google-maps-link div
const googleMapsDiv = await $('.google-maps-link').isExisting()

// Try to find place-card
const placeCard = await $('.place-card').isExisting()

// Try different selectors
const selectors = [
    '.google-maps-link a',
    'a[aria-label="View larger map"]',
    '//a[contains(text(), "View larger map")]',
    '.place-card a',
    'a[href*="maps.google.com"]'
]

for (let selector of selectors) {
    const exists = await $(selector).isExisting()
}

await browser.switchToParentFrame()


    });
});