import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idioma } from 'src/idiomas/entities/idiomas.entity';
import { CreateIdiomaDto } from 'src/idiomas/dto/create-idiomas.dto';
import { UpdateIdiomaDto } from 'src/idiomas/dto/update-idiomas.dto';
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
    return this.idiomaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma> {
    await this.idiomaRepository.update(id, updateIdiomaDto);
    return this.idiomaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Idioma> {
    await this.idiomaRepository.update(id, { estado: 'eliminado' });
    return this.idiomaRepository.findOne({ where: { id } });
  } 
}
