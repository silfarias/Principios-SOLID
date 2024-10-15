import { IClientRepository } from "../interfaces/repositories.interface";
import { IClientService } from "../interfaces/service.interface";
import { IClient } from "../models/client";

export class ClientService implements IClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    public async createClient(data: Omit<IClient, 'id'>): Promise<IClient> {
        const newId = this.generateId();
        const client: IClient = { id: newId, ...data };
        return await this.clientRepository.create(client);
    }

    public async getClientById(id: number): Promise<IClient | null> {
        return await this.clientRepository.findById(id);
    }

    public async updateClient(id: number, data: Partial<IClient>): Promise<IClient | null> {
        return await this.clientRepository.update(id, data);
    }

    public async deleteClient(id: number): Promise<boolean> {
        return await this.clientRepository.delete(id);
    }

    private generateId(): number {
        return Math.floor(Math.random() * 100000);
    }
};