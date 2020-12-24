import { Page, Browser } from 'puppeteer';

// This is fucked up, but
// there's nothing I can
// do about it.
export interface IServerFactory
{
    DemonCore;
    Get(); 
}

export interface IPage
{
    PageObject: Page;
    RunScript(func: Function): string;
}

export interface IBrowserBuilder
{
    BrowserObject: Browser;
    ReturnPage(location: string): Page
}

export interface IServer
{
    Port: number;
    Configure(): void;
    Run(): void;
}

export interface IExpress
{
    readonly Instance: any;
}

export interface ISetup
{
    Execute(app);
}

export const TYPES = {
    IBrowserBuilder: Symbol.for("IBrowserBuilder"),
    IPage: Symbol.for("IPage"),
    IServer: Symbol.for("IServer"),
    IExpress: Symbol.for("IExpress"),
    IServerFactory: Symbol.for("IServerFactory"),
    ISetup: Symbol.for("ISetup"),
}