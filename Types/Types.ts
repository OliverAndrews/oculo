// This is fucked up, but
// there's nothing I can
// do about it.
export interface IServerFactory
{
    DemonCore;
    Get(); 
}

export interface IServer
{
    Port: number;
    Configure(): void;
    Run(): void;
}

export interface ISetup
{
    Execute(app);
}

export interface IEndpoint
{
    Kind?: string;
    Slug?: string;
    Action(req, res);
}

export interface IEndpoints
{
    Endpoints: Array<IEndpoint>;
}

export const TYPES = {
    IServer: Symbol.for("IServer"),
    IServerFactory: Symbol.for("IServerFactory"),
    ISetup: Symbol.for("ISetup"),
    IEndpoints: Symbol.for("IEndpoints"),
    IEndpoint: Symbol.for("IEndpoint"),
}