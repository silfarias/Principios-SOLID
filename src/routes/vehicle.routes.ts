import { Router } from "express";
import { VehicleController } from "../controllers/vehicleController";
import { VehicleService } from "../services/vehicle.service";
import { PostgresVehicleRepository } from "../repositories/postgres/postgresVehicleRepository";

const vehicleRouter = Router();

const vehicleRepository = PostgresVehicleRepository.getInstance();
const vehicleService = new VehicleService(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);

vehicleRouter.post('/', (req, res) => vehicleController.crearVehiculo(req, res));
vehicleRouter.get('/:id', (req, res) => vehicleController.obtenerVehiculo(req, res));
vehicleRouter.put('/:id',  vehicleController.actualizarVehiculo);
vehicleRouter.delete('/:id', vehicleController.eliminarVehiculo);

export { vehicleRouter };