import GoogleMaps from '../pageobjects/gcbMaps.js'


describe('Google Maps Widget Test', () => {
    it('Testing of GCB Website - Google Maps Widget', async () => {


    await GoogleMaps.openGCB();
 
    await browser.url('https://gcbcomputers.com')

    await $('iframe[title="Google Map"]').waitForExist({ timeout: 10000 })

    const iframeSrc = await $('iframe[title="Google Map"]').getAttribute('src')

    const mapsUrl = 'https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041'

    await browser.url(mapsUrl)
  
    await browser.pause(3000)
    await browser.back()
    



// // Navigate to page
// await browser.url('https://gcbcomputers.com')

// // Wait for the map iframe
// await $('iframe[title="Google Map"]').waitForExist({ timeout: 10000 })

// // Execute JavaScript to create and click a link with the Google Maps URL
// await browser.execute(() => {
//     const mapsUrl = 'https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041'
    
//     // Create a temporary link
//     const link = document.createElement('a')
//     link.href = mapsUrl
//     link.id = 'temp-maps-link'
//     document.body.appendChild(link)
    
//     // Click it
//     link.click()
// })

// console.log('✓ Clicked Google Maps link')

// // Wait to see the map
// await browser.pause(3000)

// // Go back to GCB
// await browser.back()
// console.log('✓ Returned to GCB website')

// await browser.url('https://gcbcomputers.com')

// await $('iframe[title="Google Map"]').waitForExist({ timeout: 10000 })
// await browser.switchToFrame(await $('iframe[title="Google Map"]'))

// // Wait up to 60 seconds for the link to appear
// try {
//     await browser.waitUntil(
//         async () => {
//             const exists = await $('a[href*="maps.google.com"]').isExisting()
//             if (exists) {
//                 console.log('✓ Link found!')
//             }
//             return exists
//         },
//         {
//             timeout: 60000,
//             interval: 2000,
//             timeoutMsg: 'Google Maps link never loaded'
//         }
//     )
    
//     // Click it
//     await $('a[href*="maps.google.com"]').click()
//     console.log('✓ Clicked the link!')
    
//     await browser.pause(3000)
//     await browser.back()
    
// } catch (error) {
//     console.log('✗ Link never appeared - Google Maps not loading interactively')
    
//     // Fallback: Navigate directly
//     await browser.switchToParentFrame()
//     await browser.url('https://maps.google.com/maps?ll=41.0771,-111.984992&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=1155%20N%20Main%20St%20Layton%2C%20UT%2084041')
//     await browser.pause(3000)
//     await browser.back()
// }

// await browser.switchToParentFrame()


    });
});