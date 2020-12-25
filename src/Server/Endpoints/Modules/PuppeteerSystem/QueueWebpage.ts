import { IEndpoint } from '../../../../../Types/Types';

export class QueueWebpage implements IEndpoint
{
    public Slug: string = "/enqueue";
    public Kind: string = "GET";

    public Action(req, res)
    {
        res.send("Done");
    }
}