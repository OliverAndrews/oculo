import { IServer, IServerFactory, IEndpoints, TYPES } from '../../Types/Types';
import { inject, injectable } from 'inversify';

@injectable()
export class Server implements IServer
{
    private _server;
    private _endpoints: IEndpoints;

    constructor(
        @inject(TYPES.IServerFactory) factory: IServerFactory,
        @inject(TYPES.IEndpoints) endpoints: IEndpoints
        ) {
        this._server = factory.Get();
        this._endpoints = endpoints;
    }

    public Configure(): void {
        for(var i = 0; i < this._endpoints.Endpoints.length; i++)
        {
            const endpoint = this._endpoints.Endpoints[i];
            switch (endpoint.Kind)
            {
                case "GET":
                    this._server.get(endpoint.Slug, (req, res) => endpoint.Action(req, res));
                    break;
                case "POST":
                    this._server.post(endpoint.Slug, (req, res) => endpoint.Action(req, res));
                    break;
                case "PUT":
                    this._server.put(endpoint.Slug, (req, res) => endpoint.Action(req, res));
                    break;
                case "DELETE":
                    this._server.delete(endpoint.Slug, (req, res) => endpoint.Action(req, res));
                    break;
            }
        }
    }

    public Run(port: number): void {
        this._server.listen(port, () => console.log("Active"));
    }
}
