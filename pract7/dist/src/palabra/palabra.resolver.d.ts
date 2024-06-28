import { PalabraService } from './palabra.service';
import { Palabra } from './entities/palabra.entity';
import { CreatePalabraInput } from './dto/create-palabra.input';
import { UpdatePalabraInput } from './dto/update-palabra.input';
export declare class PalabraResolver {
    private readonly palabraService;
    constructor(palabraService: PalabraService);
    createPalabra(createPalabraInput: CreatePalabraInput): Promise<Palabra>;
    findAll(estado: string): Promise<Palabra[]>;
    findOne(id: number): Promise<Palabra>;
    updatePalabra(updatePalabraInput: UpdatePalabraInput): Promise<Palabra>;
    removePalabra(id: number): Promise<Palabra>;
}
