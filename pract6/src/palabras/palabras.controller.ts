
import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { PalabraService } from './palabras.service';
import { CreatePalabraDto } from './dto/create-palabras.dto';
import { UpdatePalabraDto } from './dto/update-palabras.dto';

@Controller('palabras')
export class PalabraController {
  constructor(private readonly palabraService: PalabraService) {}

  @Post()
  create(@Body() createPalabraDto: CreatePalabraDto) {
    return this.palabraService.create(createPalabraDto);
  }

  @Get()
  findAll() {
    return this.palabraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palabraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalabraDto: UpdatePalabraDto) {
    return this.palabraService.update(+id, updatePalabraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palabraService.remove(+id);
  }
}

