import "reflect-metadata";
import { Container } from "inversify";
import { Server } from '../src/Server/Server';
import { ServerFactory } from '../src/Server/ServerFactory';
import {  IServerFactory, IServer, TYPES, IEndpoints } from "../Types/Types";

export class Compose
{

    public ContainerProvider: Container;
    private _endpoints: IEndpoints;

    constructor(endpoints: IEndpoints){
        this._endpoints = endpoints;
    }

    public BuildContainer(): void {
        const container = new Container();
        container
            .bind<IEndpoints>(TYPES.IEndpoints)
            .toConstantValue(this._endpoints);
        container
            .bind<IServerFactory>(TYPES.IServerFactory)
            .to(ServerFactory);
        container
            .bind<IServer>(TYPES.IServer)
            .to(Server);
        this.ContainerProvider = container
    }
}