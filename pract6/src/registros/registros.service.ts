// src/registros/registros.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './entities/registros.entity';

@Injectable()
export class RegistrosService {
  constructor(
    @InjectRepository(Registro)
    private registrosRepository: Repository<Registro>,
  ) {}

  async findAll(): Promise<Registro[]> {
    return await this.registrosRepository.find();
  }

  async findOne(id): Promise<Registro> {
    return await this.registrosRepository.findOne(id);
  }

  async create(registroData: Partial<Registro>): Promise<Registro> {
    const registro = await this.registrosRepository.create(registroData);
    return await this.registrosRepository.save(registro);
  }

  async update(id, registroData: Partial<Registro>): Promise<Registro> {
    await this.registrosRepository.update(id, registroData);
    return await this.registrosRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.registrosRepository.delete(id);
  }
}
