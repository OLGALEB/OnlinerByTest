import { by, element, ElementFinder } from "protractor";

export class FooterRepo {
    
    readonly manifestLink: ElementFinder = element(by.xpath('//a[contains(text(),"Манифест")]'));
}