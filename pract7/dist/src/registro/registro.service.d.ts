import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { Repository } from 'typeorm';
import { Registro } from './entities/registro.entity';
export declare class RegistroService {
    private readonly RegistroRepository;
    constructor(RegistroRepository: Repository<Registro>);
    create(createRegistroInput: CreateRegistroInput): Promise<Registro>;
    findAll(estado: string): Promise<Registro[]>;
    findOne(id: number): Promise<Registro>;
    update(id: number, updateRegistroInput: UpdateRegistroInput): Promise<Registro>;
    remove(id: number): Promise<Registro>;
}
