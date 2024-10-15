import { IClient } from "../models/client"
import { IVehicle } from "../models/vehicle"

export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<IVehicle>;
    findById(id: number): Promise<IVehicle | null>;
    update(id: number, vehicle: Partial<IVehicle>): Promise<IVehicle | null>;
    delete(id: number): Promise<boolean>;
};

export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findById(id: number): Promise<IClient | null>;
    update(id: number, client: Partial<IClient>): Promise<IClient | null>;
    delete(id: number): Promise<boolean>;
};