import { IVehicleRepository } from "../../interfaces/repositories.interface";
import { IVehicle } from "../../models/vehicle";

export class MongoVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];

    public async create(vehicle: IVehicle): Promise<IVehicle> {
        this.vehicles.push(vehicle);
        return vehicle;
    }

    public async findById(id: number): Promise<IVehicle | null> {
        const vehicle = this.vehicles.find(v => v.id === id);
        return vehicle || null;
    }

    public async update(id: number, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vehicles[index] = { ...this.vehicles[index], ...vehicle };
            return this.vehicles[index];
        }
        return null;
    }

    public async delete(id: number): Promise<boolean> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vehicles.splice(index, 1);
            return true;
        }
        return false;
    }
};