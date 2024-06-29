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
    return this.PalabraRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePalabra: UpdatePalabraInput): Promise<Palabra> {
    await this.PalabraRepository.update(id, updatePalabra);
    return this.PalabraRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Palabra> {
    await this.PalabraRepository.update(id, { estado: 'eliminado' });
    return this.PalabraRepository.findOneBy({ id: id });
  }
}