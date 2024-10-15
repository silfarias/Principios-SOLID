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
exports.MongoVehicleRepository = void 0;
class MongoVehicleRepository {
    constructor() {
        this.vehicles = [];
    }
    create(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicles.push(vehicle);
            return vehicle;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = this.vehicles.find(v => v.id === id);
            return vehicle || null;
        });
    }
    update(id, vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.vehicles.findIndex(v => v.id === id);
            if (index !== -1) {
                this.vehicles[index] = Object.assign(Object.assign({}, this.vehicles[index]), vehicle);
                return this.vehicles[index];
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.vehicles.findIndex(v => v.id === id);
            if (index !== -1) {
                this.vehicles.splice(index, 1);
                return true;
            }
            return false;
        });
    }
}
exports.MongoVehicleRepository = MongoVehicleRepository;
;
