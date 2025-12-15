import GCBMaps from '../pageobjects/gcbMaps.js';

describe('GCB Computers - Google Maps Widget Tests', () => {
    it('should click View larger map link and open Google Maps in new tab', async () => {
        await GCBMaps.googleMaps();
    });
});