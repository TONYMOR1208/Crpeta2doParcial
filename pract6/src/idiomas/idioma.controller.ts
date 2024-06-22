import { Controller, Get, Post, Body, Param, Put, Delete, Patch, NotFoundException } from '@nestjs/common';
import { IdiomaService } from 'src/idiomas/idiomas.service';
import { CreateIdiomaDto } from './dto/create-idiomas.dto';
import { UpdateIdiomaDto } from 'src/idiomas/dto/update-idiomas.dto';


@Controller('idiomas')
export class IdiomaController {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Post()
  create(@Body() createIdiomaDto:  CreateIdiomaDto) {
    return this.idiomaService.create(createIdiomaDto);
  }

  @Get()
  findAll() {
    return this.idiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idiomaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomaService.update(+id,updateIdiomaDto );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idiomaService.remove(+id);
  }
}
