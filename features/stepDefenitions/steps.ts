import { HeaderPage } from "../pageObject/header.page";
import { FooterPage } from "../pageObject/footer.page";

export = function exampleSteps() {

    const footerPage = new FooterPage;
    const headerPage = new HeaderPage;

    this.setDefaultTimeout(600 * 1000);

    this.After(async () => {
        await headerPage.clearBrowserData();
    });

    this.Given(/^Homepage onliner.by was opened$/, async () => {
        headerPage.navigateToOnliner();
    });

    this.Then(/^Click on "Дома и квартиры" hyperlink$/, async () => {
        await headerPage.clickHouseLink;
    });

    this.Then(/^User was redirected to specific "Дома и квартиры" page$/, async () => {
        await headerPage.checkOpenedHousePage();
    });

    this.Given(/^Homepage onliner.by was opened$/, async () => {
      headerPage.navigateToOnliner();
  }); 

    this.Then(/^Click on "Манифест" hyperlink $/, async () => {
        await footerPage.clickManifest();
    });

    this.Then(/^User was redirected to specific "Манифест" page$/, async () => {
        await footerPage.checkOpenedManifestPage();
    });
}