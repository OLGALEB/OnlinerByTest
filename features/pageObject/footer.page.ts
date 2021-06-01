import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../browserHacks";
import { FooterRepo } from "../objectRepository/footer.Obj";

const defaultTimeout = browser.params.defaultTimeout;

export class FooterPage {
    
    footerRepo: FooterRepo;

    constructor() {
        this.footerRepo = new FooterRepo;
    }
    
    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToOnliner() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async clickVacancies() {
        await this.footerRepo.manifestLink.click();
    }

    public async checkTitleByTag() {
       await browser.wait(ExpectedConditions.visibilityOf(await this.footerRepo.manifestLink), defaultTimeout, "Page was not loaded");
    }

}