import { IServer, IServerFactory, TYPES } from '../../Types/Types';
import { inject, injectable } from 'inversify';

@injectable()
export class Server implements IServer
{

    public Port: number = 3000;
    private _server;

    constructor(@inject(TYPES.IServerFactory) factory: IServerFactory) {
        this._server = factory.Get();
    }

    public Configure(): void {
        this._server.get("/aa", (req, res) => {
            res.send("Hello");
        });
    }

    public Run(): void {
        this._server.listen(this.Port, () => console.log("Active"));
    }
}