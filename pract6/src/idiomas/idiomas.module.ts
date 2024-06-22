// src/idiomas/idioma.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idiomas.entity';
import { IdiomaService } from './idiomas.service';
import { IdiomaController } from './idioma.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Idioma])],
  providers: [IdiomaService],
  controllers: [IdiomaController],
})
export class IdiomaModule {}
