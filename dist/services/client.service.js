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
exports.ClientService = void 0;
class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    createClient(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newId = this.generateId();
            const client = Object.assign({ id: newId }, data);
            return yield this.clientRepository.create(client);
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientRepository.findById(id);
        });
    }
    updateClient(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientRepository.update(id, data);
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientRepository.delete(id);
        });
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
}
exports.ClientService = ClientService;
;
