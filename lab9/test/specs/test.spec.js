import CarPage from "../../objects/car.page";
import MainPage from "../../objects/main.page";

describe("Test Suite", () => {

    it("should test filter button", async () => {
        await CarPage.open();
        await CarPage.clickCookiesButton();
        await CarPage.clickFilterButton();
        await browser.pause(5000);

        expect(await CarPage.filterButton.getText()).toEqual("Farmari");
    });

    it("should test input in search field", async () => {
        await MainPage.open();
        await MainPage.clickCookiesButton();
        await MainPage.clickSearchButton();
        await MainPage.inputSearchField('G63')
        await MainPage.enterSearchField();
        await browser.pause(5000);

        expect(await MainPage.searchField.getValue()).toEqual("G63");
    })

});