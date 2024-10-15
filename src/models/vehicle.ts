export interface IVehicle {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
    disponible?: boolean;
}

export class Vehicle implements IVehicle {
    constructor(
        public id: number,
        public marca: string,
        public modelo: string,
        public anio: number,
        public precio: number,
        public disponible?: boolean
    ) {}
};