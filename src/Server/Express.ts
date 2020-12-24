import { injectable } from "inversify";
import { IExpress } from "../../Types/Types";

@injectable()
export class Express implements IExpress
{
    public Instance: any;
    constructor(express: any)
    {
        this.Instance = express;
    }
}