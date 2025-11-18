describe('Run test in 10 tabs simultaneously', () => {

    const URL = 'https://gcbcomputers.com/';

    // Your test actions placed into a reusable function
    async function runActions() {
        await browser.url(URL);

        // Example actions — add yours here
        const allClickable = await $$('a, button, [role="button"], [onclick]');
        for (const el of allClickable) {
            try {
                await el.scrollIntoView();
                await el.click();
            } catch (err) {
                // ignore failed clicks so test continues
            }
        }
    }

    it('opens 10 tabs and runs tests in each', async () => {

        // Store all window handles here
        let windowHandles = [];

        // Tab #1 is the main session
        await browser.url(URL);
        windowHandles.push(await browser.getWindowHandle());

        // Create 9 more tabs
        for (let i = 0; i < 9; i++) {
            await browser.newWindow(URL);
            windowHandles.push(await browser.getWindowHandle());
        }

        console.log(`Created ${windowHandles.length} tabs`);

        // Loop through each tab and run actions
        for (let handle of windowHandles) {
            await browser.switchToWindow(handle);
            console.log(`Running actions in tab: ${handle}`);
            await runActions();
        }
    });
});
