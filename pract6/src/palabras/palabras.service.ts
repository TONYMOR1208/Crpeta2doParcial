import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palabra } from './entities/palabras.entity';
import { CreatePalabraDto } from './dto/create-palabras.dto';
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
    const palabra = await this.palabraRepository.findOne({ where: { id } });
    if (!palabra) {
      throw new NotFoundException(`Palabra with ID ${id} not found`);
    }
    return palabra;
  }

  async update(id: number, updatePalabraDto: UpdatePalabraDto): Promise<Palabra> {
    await this.palabraRepository.update(id, updatePalabraDto);
    const updatedPalabra = await this.palabraRepository.findOne({ where: { id } });
    if (!updatedPalabra) {
      throw new NotFoundException(`Palabra with ID ${id} not found`);
    }
    return updatedPalabra;
  }

  async remove(id: number): Promise<Palabra> {
    await this.palabraRepository.delete(id);
    const deletedPalabra = await this.palabraRepository.findOne({ where: { id } });
    if (!deletedPalabra) {
      throw new NotFoundException(`Palabra with ID ${id} not found`);
    }
    return deletedPalabra;
  }
}
