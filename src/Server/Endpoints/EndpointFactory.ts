import { readFileSync, existsSync } from 'fs';
import { IEndpoint, IEndpointFactory, IEndpoints } from '../../../Types/Types';

export class EndpointsFactory implements IEndpointFactory {
    
    private endpoints: IEndpoints;

    constructor(endpoints: IEndpoints) {
        this.endpoints = endpoints;
    }

    public async Build(): Promise<IEndpoints> {
        let setup: Array<Promise<any>>;
        if (existsSync("./oconfig.json")){
            let content: string = readFileSync('./oconfig.json', "utf-8");
            let location: string = JSON.parse(content).Location;
            for (let endpoint of JSON.parse(content).Endpoints){
                setup.push(import(`${location}/${endpoint.Location}`))
            }
            this.endpoints.Endpoints = 
                await Promise.all(setup)
                    .then((results) => results.map(endpoint => <IEndpoint>(new endpoint())));
        } else {
            console.log("No config found");
        }
        return this.endpoints;
    }
}