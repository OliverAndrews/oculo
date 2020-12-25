import { injectable } from 'inversify';
import { QueueWebpage } from './Modules/PuppeteerSystem/QueueWebpage';
import { IEndpoints, IEndpoint } from '../../../Types/Types';
import { QueueStatus } from './Modules/PuppeteerSystem/QueueStatus';
import { GetDone } from './Modules/PuppeteerSystem/GetDone';

@injectable()
export class Endpoints implements IEndpoints
{
    public Endpoints: Array<IEndpoint> = [
        new QueueWebpage(),
        new QueueStatus(),
        new GetDone(),
    ];
}