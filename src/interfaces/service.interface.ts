import { IClient } from "../models/client";
import { IVehicle } from "../models/vehicle";

export interface IVehicleService {
    createVehicle(data: IVehicle): Promise<IVehicle | null>;
    findVehicleById(id: number): Promise<IVehicle | null>;
    updateVehicle(id: number, vehicle: Partial<IVehicle>): Promise<IVehicle | null>;
    deleteVehicle(id: number): Promise<boolean>;
}

export interface IClientService {
    createClient(data: Omit<IClient, 'id'>): Promise<IClient>;
    getClientById(id: number): Promise<IClient | null>;
    updateClient(id: number, data: Partial<IClient>): Promise<IClient | null>;
    deleteClient(id: number): Promise<boolean>;
}