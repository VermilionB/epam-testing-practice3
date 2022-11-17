export default class Page {
    constructor() {
        this.title = 'Mercedes-mallisto: uusien autojen valikoima | Mercedes-Benz';
    }

    async open(path) {
        await browser.url(path);
    }
}