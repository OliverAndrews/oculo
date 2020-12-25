import { IEndpoint } from '../../../../../Types/Types';

export class Status implements IEndpoint
{
    public Slug: string = "/page";
    public Kind: string = "GET";

    public Action(req, res)
    {
        res.send("Oculo is Running");
    }
}