import { CreateIdiomaInput } from './dto/create-idioma.input';
import { UpdateIdiomaInput } from './dto/update-idioma.input';
import { Idioma } from './entities/idioma.entity';
import { Repository } from 'typeorm';
export declare class IdiomaService {
    private readonly IdiomaRepository;
    constructor(IdiomaRepository: Repository<Idioma>);
    create(createIdiomaInput: CreateIdiomaInput): Promise<Idioma>;
    findAll(): Promise<Idioma[]>;
    findOne(id: number): Promise<Idioma>;
    update(id: number, updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma>;
    remove(id: number): Promise<Idioma>;
}
