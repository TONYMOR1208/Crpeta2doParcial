import { Injectable, NotFoundException } from '@nestjs/common';
import {  CreateIdiomaInput} from './dto/create-idioma.input'; // 
import { UpdateIdiomaInput} from './dto/update-idioma.input';
import { Idioma} from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly  IdiomaRepository: Repository<Idioma> ,
  ) {}
  async create(createIdiomaInput: CreateIdiomaInput): Promise<Idioma> {
    const newIdioma = this.IdiomaRepository.create(createIdiomaInput);
    return await this.IdiomaRepository.save(newIdioma);
  }

  async findAll(): Promise<Idioma[]> {
    return this.IdiomaRepository.find();
  }

  async findOne(id: number): Promise<Idioma> {
    const item = await this.IdiomaRepository.findOneBy({id});
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  
  
  async update(id: number, updateIdiomaInput: UpdateIdiomaInput): Promise<  Idioma> {
    
    const item = await this.IdiomaRepository.preload(updateIdiomaInput);

    if ( !item ) throw new NotFoundException(`Item with id: ${ id } not found`);

    return this.IdiomaRepository.save( item );

  }

  async remove( id: number ):Promise<Idioma> {
    const idioma = await this.findOne( id );
    await this.IdiomaRepository.remove( idioma );
    return { ...idioma, id };
  }
}