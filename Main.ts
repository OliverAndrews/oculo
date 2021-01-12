import { Compose } from './Setup/CompositionRoot';
import { EndpointsFactory } from './src/Server/Endpoints/EndpointFactory';
import { Endpoints } from './src/Server/Endpoints/Endpoints';
import { IServer, TYPES } from './Types/Types';

let factory = new EndpointsFactory(new Endpoints());
(() => {factory.Build()})();
/*
let container = new Compose();
var server = container.ContainerProvider.get<IServer>(TYPES.IServer);
server.Configure();
server.Run();
*/