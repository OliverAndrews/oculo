import { IEndpoints, IEndpoint } from '../../../Types/Types';
import { injectable } from 'inversify';

import { Example } from '../../../AddIns/Endpoints/Example';

@injectable()
export class Endpoints implements IEndpoints
{
    public Endpoints: Array<IEndpoint> = [
        new Example(),
    ];
}