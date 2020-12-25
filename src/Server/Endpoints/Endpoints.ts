import { QueueWebpage } from './Modules/PuppeteerSystem/QueueWebpage';
import { QueueStatus } from './Modules/PuppeteerSystem/QueueStatus';
import { IEndpoints, IEndpoint } from '../../../Types/Types';
import { GetDone } from './Modules/PuppeteerSystem/GetDone';
import { Status } from './Modules/Status/Status';
import { injectable } from 'inversify';

@injectable()
export class Endpoints implements IEndpoints
{
    public Endpoints: Array<IEndpoint> = [
        new QueueWebpage(),
        new QueueStatus(),
        new GetDone(),
        new Status(),
    ];
}