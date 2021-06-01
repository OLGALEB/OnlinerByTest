import { by, element, ElementFinder } from "protractor";

export class HeaderRepo {
    //readonly titleByTag: ElementFinder = element(by.tagName('h1'));
    readonly domLink: ElementFinder = element(by.xpath('///a[@class="b-main-navigation__link"]//span[contains(text(),"Дома и квартиры")]'));
}