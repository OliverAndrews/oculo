import { Core } from '../Core';
import Example from './Endpoints/Example';

let server = new Core();
server.Intialize();
server.Use(new Example());
server.ListenAndServe(3000);