import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { Registro } from './entities/registro.entity';
import { Repository } from 'typeorm';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';
export declare class RegistroService {
    private readonly registroRepository;
    private readonly palabraRepository;
    private readonly idiomaRepository;
    constructor(registroRepository: Repository<Registro>, palabraRepository: Repository<Palabra>, idiomaRepository: Repository<Idioma>);
    create(createRegistroDto: CreateRegistroInput): Promise<any>;
    findAll(estado: string): Promise<Registro[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateRegistroDto: UpdateRegistroInput): Promise<any>;
    remove(id: number): Promise<any>;
    private toResponseDto;
}
