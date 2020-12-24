import { IServerFactory } from '../../Types/Types';
import * as express from 'express';
import { injectable } from 'inversify';

@injectable()
export class ServerFactory implements IServerFactory
{
    public DemonCore;
    constructor(){
       this.DemonCore =  express();
    }

    public Get()
    {
        return this.DemonCore;
    }
}