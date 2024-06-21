// src/registros/registros.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrosService } from './registros.service';
import { RegistrosController } from './registros.controller';
import { Registro } from './entities/registros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registro])],
  providers: [RegistrosService],
  controllers: [RegistrosController],
  exports: [RegistrosService], 
})
export class RegistrosModule {}
