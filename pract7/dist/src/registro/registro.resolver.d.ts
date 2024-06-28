import { RegistroService } from './registro.service';
import { Registro } from './entities/registro.entity';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
export declare class RegistroResolver {
    private readonly registroService;
    constructor(registroService: RegistroService);
    createRegistro(createRegistroInput: CreateRegistroInput): Promise<Registro>;
    findAll(estado: string): Promise<Registro[]>;
    findOne(id: number): Promise<Registro>;
    updateRegistro(updateRegistroInput: UpdateRegistroInput): Promise<Registro>;
    removeRegistro(id: number): Promise<Registro>;
}
