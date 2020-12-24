import { injectable } from "inversify";
import { Browser, Page } from 'puppeteer';
import { IBrowserBuilder } from '../../Types/Types';

@injectable()
export class BrowserBuilder implements IBrowserBuilder
{
    public BrowserObject: Browser;

    constructor(browser: Browser)
    {
        this.BrowserObject = browser;
    }

    public ReturnPage(location: string): Page
    {
        return this.BrowserObject
            .newPage()
            .then((page) => page.goto(location));
    }
}