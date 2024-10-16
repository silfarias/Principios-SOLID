import { IClientRepository } from "../interfaces/repositories.interface";
import { IClientService } from "../interfaces/service.interface";
import { IClient } from "../models/client";

export class ClientService implements IClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    public async createClient(data: IClient): Promise<IClient> {
        if (!data) {
            throw new Error('No se proporcionaron datos del cliente');
        }
        const client: IClient = {
            id: data.id,
            nombre: data.nombre,
            email: data.email,
            telefono: data.telefono,
        }
        const crearClient = await this.clientRepository.create(client);
        return crearClient;
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
};