import { Request, Response, Application } from 'express';

export interface IServerFactory
{
    DemonCore: Application;
    Get(): Application; 
}

export interface IServer
{
    Configure(): void;
    Run(port: number): void;
}

export interface ISetup
{
    Execute(app);
}

export interface IEndpoint
{
    Kind?: string;
    Slug?: string;
    Action(req: Request, res: Response);
}

export interface IEndpoints
{
    Endpoints: Array<IEndpoint>;
}

export interface IEndpointFactory {
    Build(): Promise<IEndpoints>;
}

export const TYPES = {
    IServer: Symbol.for("IServer"),
    IServerFactory: Symbol.for("IServerFactory"),
    ISetup: Symbol.for("ISetup"),
    IEndpoints: Symbol.for("IEndpoints"),
    IEndpoint: Symbol.for("IEndpoint"),
    IEndpointFactory: Symbol.for("IEndpointFactory")
}