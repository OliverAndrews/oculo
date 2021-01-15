import { Get } from '../../src/Server/Utils/Methods';
import { IEndpoint } from "../../Types/Types";
import { Request, Response } from 'express';

@Get("/example")
export default class Example implements IEndpoint
{
    public Action(req: Request, res: Response): void
    {
        res.send("Done!");
    }
}