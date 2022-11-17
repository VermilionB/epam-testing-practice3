import Page from "./page";

class CarPage extends Page {
    get filterButton() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors ' +
            '> div > div > div > div > div > div:nth-child(4) > div > section > div > div > section:nth-child(2) > button.dh-io-vmos_1RKkS:nth-child(4)')
    }

    get cookiesButton() {
        return $('body > cmm-cookie-banner').shadow$('div > div > div.cmm-cookie-banner__content > cmm-buttons-wrapper ' +
            '> div > div > button.wb-button.wb-button--primary.wb-button--small.wb-button--accept-all')
    }

    async open() {
        await super.open('https://www.mercedes-benz.fi/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE');
    }

    async clickFilterButton() {
        await (await this.filterButton).click();
    }

    async clickCookiesButton() {
        await (await this.cookiesButton).click();
    }

}

export default new CarPage();