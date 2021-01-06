import "reflect-metadata";
import { Container } from "inversify";
import { Server } from '../src/Server/Server';
import { ServerFactory } from '../src/Server/ServerFactory';
import { Endpoints } from '../src/Server/Endpoints/Endpoints';
import {  IEndpoints, IServerFactory, IServer, TYPES } from "../Types/Types";

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
        this.ContainerProvider = container
    }
}