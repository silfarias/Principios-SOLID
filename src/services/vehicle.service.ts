import { IVehicleRepository } from "../interfaces/repositories.interface";
import { IVehicleService } from "../interfaces/service.interface";
import { IVehicle } from "../models/vehicle";

export class VehicleService implements IVehicleService {
    private vehicleRepository: IVehicleRepository;

    constructor(vehicleRepository: IVehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public async createVehicle(data: IVehicle): Promise<IVehicle> {
        if (!data) {
            throw new Error('No se proporcionaron datos del vehículo');
        }
        const vehicle: IVehicle = {
            id: data.id,
            marca: data.marca,
            modelo: data.modelo,
            anio: data.anio,
            precio: data.precio,
            disponible: data.disponible
        };
        const creacionVehiculo = await this.vehicleRepository.create(vehicle);
        return creacionVehiculo;
    }


    public async findVehicleById(id: number): Promise<IVehicle | null> {
        return await this.vehicleRepository.findById(id);
    }

    public async updateVehicle(id: number, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
        return await this.vehicleRepository.update(id, vehicle);
    }

    public async deleteVehicle(id: number): Promise<boolean> {
        return await this.vehicleRepository.delete(id);
    }
};