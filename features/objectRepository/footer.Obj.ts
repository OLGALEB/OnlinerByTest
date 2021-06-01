import { by, element, ElementFinder } from "protractor";

export class FooterRepo {
    //readonly titleByTag: ElementFinder = element(by.tagName('h1'));
    readonly manifestLink: ElementFinder = element(by.xpath('//a[contains(text(),"Манифест")]'));
}