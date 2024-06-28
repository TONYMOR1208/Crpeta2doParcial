import { CreatePalabraInput } from './dto/create-palabra.input';
import { UpdatePalabraInput } from './dto/update-palabra.input';
import { Palabra } from './entities/palabra.entity';
import { Repository } from 'typeorm';
export declare class PalabraService {
    private readonly PalabraRepository;
    constructor(PalabraRepository: Repository<Palabra>);
    create(createPalabraInput: CreatePalabraInput): Promise<Palabra>;
    findAll(): Promise<Palabra[]>;
    findOne(id: number): Promise<Palabra>;
    update(id: number, updatePalabraInput: UpdatePalabraInput): Promise<Palabra>;
    remove(id: number): Promise<Palabra>;
}
