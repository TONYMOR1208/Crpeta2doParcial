// src/registros/registros.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { Registro } from './entities/registros.entity';

@Controller('registros')
export class RegistrosController {
  constructor(private readonly registrosService: RegistrosService) {}

  @Get()
  async findAll(): Promise<Registro[]> {
    return this.registrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Registro> {
    return this.registrosService.findOne(+id);
  }

  @Post()
  async create(@Body() registroData: Partial<Registro>): Promise<Registro> {
    return this.registrosService.create(registroData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() registroData: Partial<Registro>): Promise<Registro> {
    return this.registrosService.update(+id, registroData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.registrosService.delete(+id);
  }
}
