export interface IClient {
    id: number;
    nombre: string;
    email: string;
    telefono: number;
};

export class Client implements IClient {
    constructor(
        public id: number,
        public nombre: string,
        public email: string,
        public telefono: number
    ) {}
};