import GCBGoogleMaps from '../pageobjects/gcbMaps.js'


describe('Google Maps Widget Test', () => {
    it('Testing of GCB Website - Google Maps Widget', async () => {
        await GCBGoogleMaps.openGCB();
        await GCBGoogleMaps.allGoogleMaps();
    });
});