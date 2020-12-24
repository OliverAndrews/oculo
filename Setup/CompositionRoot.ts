import "reflect-metadata";
import { Container } from "inversify";
import { IBrowserBuilder, IPage, IServer, IServerFactory, ISetup, TYPES } from "../Types/Types";
import { PageObject } from '../src/PuppeteerSystem/PageObject';
import { BrowserBuilder } from "../src/PuppeteerSystem/BrowserBuilder";
import { Server } from '../src/Server/Server';
import { ServerFactory } from '../src/Server/ServerFactory';

export class Compose
{
    public readonly ContainerProvider: Container;

    constructor(){
        const container = new Container();
        container
            .bind<IServerFactory>(TYPES.IServerFactory)
            .to(ServerFactory);
        container
            .bind<IServer>(TYPES.IServer)
            .to(Server);
        container
            .bind<IPage>(TYPES.IPage)
            .to(PageObject);
        container
            .bind<IBrowserBuilder>(TYPES.IBrowserBuilder)
            .to(BrowserBuilder);
        this.ContainerProvider = container
    }
}