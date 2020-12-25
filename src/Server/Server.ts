import { IServer, IServerFactory, IEndpoints, TYPES } from '../../Types/Types';
import { inject, injectable } from 'inversify';

@injectable()
export class Server implements IServer
{

    public Port: number = 3000;
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
        for(var endpoint of this._endpoints.Endpoints)
        {
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

    public Run(): void {
        this._server.listen(this.Port, () => console.log("Active"));
    }
}