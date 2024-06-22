import { Controller, Post, Get, Patch, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { RegistroService } from './registros.service';
import { CreateRegistroDto } from './dto/create-registros.dto';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  async create(@Body() createRegistroDto: CreateRegistroDto) {
    return await this.registroService.create(createRegistroDto);
  }

  @Get()
  async findAll() {
    return await this.registroService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.registroService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegistroDto: CreateRegistroDto) {
    return await this.registroService.update(+id, updateRegistroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removedRegistro = await this.registroService.remove(+id);
    return removedRegistro; 
  }
}
