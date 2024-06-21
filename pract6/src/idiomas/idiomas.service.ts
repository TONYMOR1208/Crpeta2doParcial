import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idioma } from './entities/idiomas.entity';
import { CreateIdiomaDto } from './dto/create-idiomas.dto';
import { UpdateIdiomaDto } from './dto/update-idiomas.dto';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) {}

  async create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return this.idiomaRepository.save(idioma);
  }

  async findAll(): Promise<Idioma[]> {
    return this.idiomaRepository.find();
  }

  async findOne(id: number): Promise<Idioma> {
    const idioma = await this.idiomaRepository.findOne({ where: { id } });
    if (!idioma) {
      throw new NotFoundException(`Idioma with ID ${id} not found`);
    }
    return idioma;
  }

  async update(id: number, updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma> {
    await this.idiomaRepository.update(id, updateIdiomaDto);
    const updatedIdioma = await this.idiomaRepository.findOne({ where: { id } });
    if (!updatedIdioma) {
      throw new NotFoundException(`Idioma with ID ${id} not found`);
    }
    return updatedIdioma;
  }

  async remove(id: number): Promise<Idioma> {
    await this.idiomaRepository.delete(id);
    const deletedIdioma = await this.idiomaRepository.findOne({ where: { id } });
    if (!deletedIdioma) {
      throw new NotFoundException(`Idioma with ID ${id} not found`);
    }
    return deletedIdioma;
  }
}
