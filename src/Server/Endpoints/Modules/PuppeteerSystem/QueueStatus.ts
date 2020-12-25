import { IEndpoint } from '../../../../../Types/Types';

export class QueueStatus implements IEndpoint
{
    public Slug: string = "/page";
    public Kind: string = "GET";

    public Action(req, res)
    {
        res.send("Done");
    }
}