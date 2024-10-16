import { IVehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';

export class DiscountedVehicleService extends VehicleService {
    public applyDiscount(vehicle: IVehicle, discountPercentage: number): IVehicle {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error('El porcentaje de descuento debe estar entre 0 y 100');
        }
        const discountAmount = (vehicle.precio * discountPercentage) / 100;
        vehicle.precio = vehicle.precio - discountAmount;
        return vehicle;
    }
};