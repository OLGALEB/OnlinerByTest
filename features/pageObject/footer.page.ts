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

    public async clickManifest() {
        await this.footerRepo.manifestLink.click();
    }

    public async checkOpenedManifestPage() {
        await browser.navigate().to(browser.params.houseUrl);
        await browser.wait(ExpectedConditions.urlIs(browser.params.manifestUrl), defaultTimeout, "Timeout error");
    }   
}