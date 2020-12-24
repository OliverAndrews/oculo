import { Compose } from './Setup/CompositionRoot';
import { IServer, TYPES } from './Types/Types';

let container = new Compose();
var server = container
    .ContainerProvider
    .get<IServer>(TYPES.IServer);
server.Configure();
server.Run();