
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palabra } from './entities/palabras.entity';
import { CreatePalabraDto } from 'src/palabras/dto/create-palabras.dto';
import { UpdatePalabraDto } from './dto/update-palabras.dto';

@Injectable()
export class PalabraService {
  constructor(
    @InjectRepository(Palabra)
    private readonly palabraRepository: Repository<Palabra>,
  ) {}

  async create(createPalabraDto: CreatePalabraDto): Promise<Palabra> {
    const palabra = this.palabraRepository.create(createPalabraDto);
    return this.palabraRepository.save(palabra);
  }

  async findAll(): Promise<Palabra[]> {
    return this.palabraRepository.find();
  }

  async findOne(id: number): Promise<Palabra> {
    return this.palabraRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePalabraDto: UpdatePalabraDto): Promise<Palabra> {
    await this.palabraRepository.update(id, updatePalabraDto);
    return this.palabraRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Palabra> {
    await this.palabraRepository.update(id, { estado: 'eliminado' });
    return this.palabraRepository.findOne({ where: { id } });
  } 
}
