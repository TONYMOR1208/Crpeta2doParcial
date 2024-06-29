import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroResolver } from './registro.resolver';
import { RegistroService } from './registro.service';  // Asegúrate de importar RegistroService
import { Registro } from './entities/registro.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registro, Palabra, Idioma])],
  providers: [RegistroService, RegistroResolver], 
  exports: [TypeOrmModule],
})
export class RegistroModule {}
