import { IClient } from "../models/client"
import { IVehicle } from "../models/vehicle"

export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<IVehicle>;
    findAll(): Promise<IVehicle[] | null>
    findById(id: number): Promise<IVehicle | null>;
    update(id: number, vehicle: IVehicle): Promise<IVehicle>;
    delete(id: number): Promise<IVehicle>;
};

export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findAll(): Promise<IClient[]>
    findById(id: number): Promise<IClient>;
    update(id: number, client: IClient): Promise<IClient>;
    delete(id: number): Promise<IClient>;
};