describe("Test Suite", () => {
    it("should test title", async () => {
        await browser.url("https://www.mercedes-benz.fi/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE");
        await browser.setWindowSize(1920, 1080);

        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Mercedes-mallisto: uusien autojen valikoima | Mercedes-Benz");
    });

    it("should test filter button", async () => {
        await browser.url("https://www.mercedes-benz.fi/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE");
        await browser.setWindowSize(1920, 1080);

        await (await $('#first-web-component')).shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors ' +
            '> div > div > div > div > div > div:nth-child(4) > div > section > div > div > section:nth-child(2) > button.dh-io-vmos_1RKkS:nth-child(4)')
            .click();
        await browser.pause(5000);
    });

    it("should test input in search field", async () => {
        await browser.url("https://www.mercedes-benz.com/en/");
        await browser.setWindowSize(1920, 1080);

        await (await $('body > div.header > brandhub-header')).shadow$('div > div > div.brandhub-header__container ' +
            '> div.brandhub-meta-navigation.brandhub-header__meta-navigation.brandhub-meta-navigation--in > ul > li:nth-child(6) > button')
            .click();
        await browser.pause(5000);

        await (await $('body > div.header > brandhub-header')).shadow$('div > div > div.brandhub-search.brandhub-search--in ' +
            '> div.brandhub-search__container > div > form > div > input').setValue('G63');
        await browser.pause(1000);

        await browser.keys('Enter');

        await browser.pause(15000);

    });

});