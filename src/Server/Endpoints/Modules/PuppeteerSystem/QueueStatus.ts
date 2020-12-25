import { IEndpoint } from '../../../../../Types/Types';

export class QueueStatus implements IEndpoint
{
    public Slug: string = "/queue-stat";
    public Kind: string = "GET";

    public Action(req, res)
    {
        res.send("Done");
    }
}