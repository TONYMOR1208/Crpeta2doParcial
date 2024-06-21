import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { PalabraService } from './palabras.service';
import { Palabra } from './entities/palabras.entity';
import { CreatePalabraDto } from './dto/create-palabras.dto';
import { UpdatePalabraDto } from './dto/update-palabras.dto';

@Controller('palabras')
export class PalabraController {
  constructor(private readonly palabraService: PalabraService) {}

  @Post()
  async create(@Body() createPalabraDto: CreatePalabraDto): Promise<Palabra> {
    return this.palabraService.create(createPalabraDto);
  }

  @Get()
  async findAll(): Promise<Palabra[]> {
    return this.palabraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Palabra> {
    return this.palabraService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePalabraDto: UpdatePalabraDto): Promise<Palabra> {
    return this.palabraService.update(id, updatePalabraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Palabra> {
    return this.palabraService.remove(id);
  }
}
