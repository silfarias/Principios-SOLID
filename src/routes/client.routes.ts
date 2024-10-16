import { Router } from "express";
import { ClientController } from "../controllers/clientController";
import { ClientService } from "../services/client.service";
import { MongoClientRepository } from "../repositories/mongo/mongoClientRepository";

const clientRouter = Router();

const clientRepository = new MongoClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

clientRouter.post('/', clientController.crearCliente);
// clientRouter.get('/', clientController.obtenerClientes);
// clientRouter.put('/:id', clientController.actualizarCliente);
// clientRouter.delete('/:id', clientController.eliminarCliente);