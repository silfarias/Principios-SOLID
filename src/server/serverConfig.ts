import express, { Application } from "express";
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { IServerConfig } from "../interfaces/server.interface";
import { router } from "../routes/index.routes";
import 'dotenv/config';

export class serverConfig implements IServerConfig {
    private app: Application;
    private port: number | string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    };

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        // this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes(): void {
        this.app.use('/', router);
    }
    
    public async listen(): Promise<void> {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    };
};