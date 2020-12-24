import { Page } from 'puppeteer';
import { injectable } from "inversify";
import { IPage } from '../../Types/Types';

@injectable()
export class PageObject implements IPage
{
    PageObject: Page;
    public RunScript(func: Function): string
    {
        var output: string;
        return output;
    }
}