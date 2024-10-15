export interface IVehicle {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number
}

export class Vehicle implements IVehicle {
    constructor(
        public id: number,
        public marca: string,
        public modelo: string,
        public anio: number,
        public precio: number
    ) {}
};