import "reflect-metadata";
import { Container } from "inversify";
import { Server } from '../src/Server/Server';
import { ServerFactory } from '../src/Server/ServerFactory';
import { Endpoints } from '../src/Server/Endpoints/Endpoints';
import { PageObject } from '../src/PuppeteerSystem/PageObject';
import { BrowserBuilder } from "../src/PuppeteerSystem/BrowserBuilder";
import { IBrowserBuilder, IEndpoints, IPage, IServer, IServerFactory, TYPES } from "../Types/Types";

export class Compose
{

    public readonly ContainerProvider: Container;

    constructor(){
        const container = new Container();
        container
            .bind<IEndpoints>(TYPES.IEndpoints)
            .to(Endpoints);
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