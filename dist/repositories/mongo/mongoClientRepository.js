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
exports.MongoClientRepository = void 0;
class MongoClientRepository {
    constructor() {
        this.clients = [];
    }
    create(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clients.push(client);
            return client;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clients.find(c => c.id === id);
            return client || null;
        });
    }
    update(id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.clients.findIndex(c => c.id === id);
            if (index !== -1) {
                this.clients[index] = Object.assign(Object.assign({}, this.clients[index]), client);
                return this.clients[index];
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.clients.findIndex(c => c.id === id);
            if (index !== -1) {
                this.clients.splice(index, 1);
                return true;
            }
            return false;
        });
    }
}
exports.MongoClientRepository = MongoClientRepository;
;
