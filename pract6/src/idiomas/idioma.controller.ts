import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { IdiomaService } from './idiomas.service';
import { Idioma } from './entities/idiomas.entity';
import { CreateIdiomaDto } from './dto/create-idiomas.dto';
import { UpdateIdiomaDto } from './dto/update-idiomas.dto';

@Controller('idiomas')
export class IdiomaController {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Post()
  async create(@Body() createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    return this.idiomaService.create(createIdiomaDto);
  }

  @Get()
  async findAll(): Promise<Idioma[]> {
    return this.idiomaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Idioma> {
    return this.idiomaService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma> {
    return this.idiomaService.update(id, updateIdiomaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Idioma> {
    return this.idiomaService.remove(id);
  }
}
