import { Request, Response } from 'express';
import { IClientService } from "../interfaces/service.interface";
import { IClient } from "../models/client";

export class ClientController {
    private clientService: IClientService

    constructor(clientService: IClientService) {
        this.clientService = clientService
    }

    public async crearCliente(req: Request, res: Response) {
        try {
            const data = req.body as IClient;
            const nuevoCliente = await this.clientService.createClient(data);
            res.status(201).json(nuevoCliente);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error al crear cliente', error });
        }
    }

    public async obtenerClientes(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const cliente = await this.clientService.getClientById(parseInt(id, 10));
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(400).json({ message: 'Error al obtener cliente', error });
        }
    }

    public async actualizarCliente(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body as Partial<IClient>;
            const clienteActualizado = await this.clientService.updateClient(parseInt(id, 10), data)
            if (!clienteActualizado) {
                return res.status(404).json({ message: 'No se encontró el cliente' });
            }
            res.status(200).json(clienteActualizado);
        } catch (error) {
            res.status(400).json({ message: 'Error al actualizar cliente', error });
        }
    }

    public async eliminarCliente(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await this.clientService.deleteClient(parseInt(id, 10));
            if (!deleted) {
                return res.status(404).json({ message: 'No se encontró el cliente' });
            }
            res.status(200).json({ message: 'Cliente eliminado' });
        } catch (error) {
            res.status(400).json({ message: 'Error al eliminar cliente', error });
        }
    }
}