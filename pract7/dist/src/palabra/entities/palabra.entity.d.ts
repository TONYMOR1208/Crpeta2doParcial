import { Registro } from 'src/registro/entities/registro.entity';
export declare class Palabra {
    id: number;
    palabra: string;
    deletreo: string;
    silabas: number;
    fonetica: string;
    estado: string;
    idiomaId: number;
    registro: Registro[];
}
