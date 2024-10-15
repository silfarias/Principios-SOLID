import { IVehicleRepository } from "../interfaces/repositories.interface";
import { IVehicle } from "../models/vehicle";

export class VehicleService {
    private vehicleRepository: IVehicleRepository;

    constructor(vehicleRepository: IVehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    private generateId(): number {
        return Math.floor(Math.random() * 100000);
    }
    //logica para crear un vehiculo
    public async createVehicle(data: Omit<IVehicle, 'id'>): Promise<IVehicle> {
        const newId = this.generateId();
        const vehicle: IVehicle = { id: newId, ...data, disponible: true };
        return await this.vehicleRepository.create(vehicle);
    }
    //busqueda de vehiculo
    public async findVehicleById(id: number): Promise<IVehicle | null> {
        return await this.vehicleRepository.findById(id);
    }
    //actualización de vehiculo
    public async updateVehicle(id: number, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
        return await this.vehicleRepository.update(id, vehicle);
    }

    public async deleteVehicle(id: number): Promise<boolean> {
        return await this.vehicleRepository.delete(id);
    }
};