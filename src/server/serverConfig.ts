import express, { Application } from "express";
import { IServerConfig } from "../interfaces/server.interface";
import 'dotenv/config';

export class serverConfig implements IServerConfig {
    private app: Application;
    private port: number | string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    };

    public async listen(): Promise<void> {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    };
};