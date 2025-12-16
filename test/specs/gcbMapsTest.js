import GCBMaps from '../pageobjects/gcbMaps.js';

describe('GCB Computers - Google Maps Widget Tests', () => {
    it('should test google and apple maps components', async () => {
        await GCBMaps.allMaps();
    });
});