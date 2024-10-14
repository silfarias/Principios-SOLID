import { IVehicleRepository } from "../../interfaces/repositories.interface";
import { IVehicle } from "../../models/vehicle";

export class MongoVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];

    async create(vehicle: IVehicle): Promise<IVehicle> {
        this.vehicles.push(vehicle);
        return vehicle;
    }

    async findById(id: number): Promise<IVehicle> {
    }

    async update(id: number, updatedVehicle: IVehicle): Promise<IVehicle> {
    }

    async delete(id: number): Promise<IVehicle> {

    }
}

export class MySqlVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];

    async create(vehicle: IVehicle): Promise<IVehicle> {
    }

    async findById(id: number): Promise<IVehicle> {
    }

    async update(id: number, updatedVehicle: IVehicle): Promise<IVehicle> {
    }

    async delete(id: number): Promise<IVehicle> {

    }
}