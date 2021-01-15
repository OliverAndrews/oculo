import { Compose } from './Setup/CompositionRoot';
import { IEndpoint, IEndpoints, IServer, TYPES } from './Types/Types';

export class Core {

    private _server: IServer
    private _initialized: boolean = false;
    private _endpoints: IEndpoints;

    public Use(endpoint: IEndpoint) {
        this._endpoints.Endpoints.push(endpoint);
    }

    private EndpointsFactory(): IEndpoints {
        return new class implements IEndpoints {
            Endpoints: Array<IEndpoint> = [];
        }
    }

    public Intialize(): void {
        if (this._initialized) 
            throw new Error("Server already initialized");
        this._endpoints = this.EndpointsFactory();
        this._initialized = true;
    }

    public ListenAndServe(port: number): void {
        if (!this._initialized) throw new Error("Server not initialized. Run Initialize before calling.");
        let container = new Compose(this._endpoints);
        container.BuildContainer();
        this._server = container.ContainerProvider.get<IServer>(TYPES.IServer);
        this._server.Configure();
        this._server.Run(port);
    }
}

