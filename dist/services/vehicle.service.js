"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
class VehicleService {
    // 
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
    //logica para crear un vehiculo
    createVehicle(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newId = this.generateId();
            const vehicle = Object.assign(Object.assign({ id: newId }, data), { disponible: true });
            return yield this.vehicleRepository.create(vehicle);
        });
    }
    //busqueda de vehiculo
    findVehicleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vehicleRepository.findById(id);
        });
    }
    //actualización de vehiculo
    updateVehicle(id, vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vehicleRepository.update(id, vehicle);
        });
    }
    deleteVehicle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vehicleRepository.delete(id);
        });
    }
}
exports.VehicleService = VehicleService;
;
