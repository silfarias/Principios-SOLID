export interface IVehicle {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
    disponible?: boolean;
}