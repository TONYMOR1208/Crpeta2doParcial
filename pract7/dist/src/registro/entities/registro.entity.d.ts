import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';
export declare class Registro {
    id: number;
    idiomaId: number;
    palabraId: number;
    deletreo: string;
    silabas: number;
    fonetica: string;
    estado: string;
    idioma: Idioma;
    palabra: Palabra;
}
