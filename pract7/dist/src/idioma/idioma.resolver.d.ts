import { IdiomaService } from './idioma.service';
import { Idioma } from './entities/idioma.entity';
import { CreateIdiomaInput } from './dto/create-idioma.input';
import { UpdateIdiomaInput } from './dto/update-idioma.input';
export declare class IdiomaResolver {
    private readonly idiomaService;
    constructor(idiomaService: IdiomaService);
    createIdioma(createIdiomaInput: CreateIdiomaInput): Promise<Idioma>;
    findAll(): Promise<Idioma[]>;
    findOne(id: number): Promise<Idioma>;
    updateIdioma(updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma>;
    removeIdioma(id: number): Promise<Idioma>;
}
