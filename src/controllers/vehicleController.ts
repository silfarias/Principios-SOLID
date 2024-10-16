import { IVehicleService } from "../interfaces/service.interface";
import { Request, Response } from "express";
import { IVehicle } from "../models/vehicle";

export class VehicleController {
    private vehicleService: IVehicleService;

    constructor(vehicleService: IVehicleService) {
        this.vehicleService = vehicleService;
    }

    public async crearVehiculo(req: Request, res: Response) {
        try {
            const data = req.body as IVehicle;
            const nuevoVehiculo = await this.vehicleService.createVehicle(data);
            res.status(201).json(nuevoVehiculo);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error al crear vehículo', error });
        }
    }


    public async obtenerVehiculo(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const vehiculo = await this.vehicleService.findVehicleById(Number(id));
            if (!vehiculo) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }
            res.status(200).json(vehiculo);
        } catch (error) {
            res.status(400).json({ message: 'Error al obtener vehículo', error });
        }
    }

    public async actualizarVehiculo(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const data = req.body as Partial<IVehicle>;
            const vehiculo = await this.vehicleService.updateVehicle(Number(id), data);
            if (!vehiculo) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }
            res.status(200).json(vehiculo);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error al actualizar vehículo', error });
        }
    }

    public async eliminarVehiculo(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const deleted = await this.vehicleService.deleteVehicle(Number(id));
            if (!deleted) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }
            res.status(200).json({ message: 'Vehículo eliminado' });
        } catch (error) {
            res.status(400).json({ message: 'Error al eliminar vehículo', error });
        }
    }
};