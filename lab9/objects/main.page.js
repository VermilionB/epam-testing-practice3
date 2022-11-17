import Page from "./page";

class MainPage extends Page {
    get searchButton() {
        return $('body > div.header > brandhub-header').shadow$('div > div > div.brandhub-header__container ' +
            '> div.brandhub-meta-navigation.brandhub-header__meta-navigation.brandhub-meta-navigation--in > ul > li:nth-child(6) > button')
    }

    get searchField() {
        return $('body > div.header > brandhub-header').shadow$('div > div > div.brandhub-search.brandhub-search--in ' +
            '> div.brandhub-search__container > div > form > div > input')
    }

    async open() {
        await super.open('https://www.mercedes-benz.com/en/');
    }

    async clickSearchButton() {
        await (await this.searchButton).click();
    }

    async inputSearchField(searchString) {
        await (await this.searchField).setValue(searchString);
    }

    async enterSearchField() {
        await browser.keys('Enter');
    }
}

export default new MainPage();