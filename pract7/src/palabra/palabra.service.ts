import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePalabraInput } from './dto/create-palabra.input';
import { UpdatePalabraInput } from './dto/update-palabra.input';
import { Palabra } from './entities/palabra.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PalabraService {
  constructor(
    @InjectRepository(Palabra)
    private readonly  PalabraRepository: Repository<Palabra> ,
  ) {}
  async create(createPalabraInput: CreatePalabraInput): Promise<Palabra> {
    const newPalabra = this.PalabraRepository.create(createPalabraInput);
    return await this.PalabraRepository.save(newPalabra);
  }

  async findAll(estado:string): Promise<Palabra[]> {
    const wherecondition = estado=== 'todos' ? {} : {estado};
    return this.PalabraRepository.find({where: wherecondition});
  }

  async findOne(id: number): Promise<Palabra> {
    const item = await this.PalabraRepository.findOneBy({id});
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  
  
  async update(id: number, updatePalabraInput: UpdatePalabraInput): Promise<  Palabra> {
    
    const item = await this.PalabraRepository.preload(updatePalabraInput);

    if ( !item ) throw new NotFoundException(`Item with id: ${ id } not found`);

    return this.PalabraRepository.save( item );

  }

  async remove( id: number ):Promise<   Palabra> {
    const palabra = await this.findOne( id );
    await this.PalabraRepository.remove( palabra );
    return { ...palabra, id };
  }
}
