import { Get } from '../../src/Server/Utils/Methods';
import { IEndpoint } from "../../Types/Types";

@Get("/example")
export default class Example implements IEndpoint
{
    public Action(req, res): void
    {
        res.send("Done!");
    }
}