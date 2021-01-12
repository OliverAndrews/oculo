import "reflect-metadata";
import { Container } from "inversify";
import { Server } from '../src/Server/Server';
import { ServerFactory } from '../src/Server/ServerFactory';
import {  IServerFactory, IServer, TYPES, IEndpointFactory } from "../Types/Types";
import { EndpointsFactory } from "../src/Server/Endpoints/EndpointFactory";

export class Compose
{

    public readonly ContainerProvider: Container;

    constructor(){
        const container = new Container();
        container
            .bind<IEndpointFactory>(TYPES.IEndpointFactory)
            .to(EndpointsFactory);
        container
            .bind<IServerFactory>(TYPES.IServerFactory)
            .to(ServerFactory);
        container
            .bind<IServer>(TYPES.IServer)
            .to(Server);
        this.ContainerProvider = container
    }
}