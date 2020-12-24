import { IExpress } from "../../Types/Types";

export class Express implements IExpress
{
    public Instance: any;
    constructor(express: any)
    {
        this.Instance = express;
    }
}