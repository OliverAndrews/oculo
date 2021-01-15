import * as express from 'express';
import { injectable } from 'inversify';
import { IServerFactory } from '../../Types/Types';
import { Application } from 'express';

@injectable()
export class ServerFactory implements IServerFactory
{
    public DemonCore: Application;
    constructor(){
       this.DemonCore =  express();
    }

    public Get()
    {
        return this.DemonCore;
    }
}