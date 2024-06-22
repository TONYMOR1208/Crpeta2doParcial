import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './entities/registros.entity';
import { RegistroService } from './registros.service';
import { RegistroController } from 'src/registros/registros.controller';
import { Idioma } from '../idiomas/entities/idiomas.entity'; 
import { Palabra } from '../palabras/entities/palabras.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Registro, Idioma, Palabra]), 
  ],
  controllers: [RegistroController],
  providers: [RegistroService],
})
export class RegistrosModule {}
