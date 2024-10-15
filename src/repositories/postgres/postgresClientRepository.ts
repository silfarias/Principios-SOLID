import { IClientRepository } from "../../interfaces/repositories.interface";
import { IClient } from "../../models/client";

export class PostgresClientRepository implements IClientRepository {
    private clients: IClient[] = [];

    public async create(client: IClient): Promise<IClient> {
        this.clients.push(client);
        return client;
    }

    public async findById(id: number): Promise<IClient | null> {
        const client = this.clients.find(c => c.id === id);
        return client || null;
    }

    public async update(id: number, client: Partial<IClient>): Promise<IClient | null> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            this.clients[index] = { ...this.clients[index], ...client };
            return this.clients[index];
        }
        return null;
    }

    public async delete(id: number): Promise<boolean> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            this.clients.splice(index, 1);
            return true;
        }
        return false;
    }
};