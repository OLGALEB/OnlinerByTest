import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../browserHacks";
import { HeaderRepo } from "../objectRepository/header.Obj";

const defaultTimeout = browser.params.defaultTimeout;

export class HeaderPage {
    
    headerRepo: HeaderRepo
    
    constructor() {
        this.headerRepo = new HeaderRepo;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToOnliner() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async clickServices() {
        await this.headerRepo.domLink.click();
    }

    public async checkTitleByClass() {
       await browser.wait(ExpectedConditions.visibilityOf(await this.headerRepo.domLink), defaultTimeout, "Page was not loaded");
    }
}