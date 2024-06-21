import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idiomas.entity';
import { IdiomaService } from './idiomas.service';
import { IdiomaController } from 'src/idiomas/idioma.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Idioma])],
  providers: [IdiomaService],
  controllers: [IdiomaController],
  exports: [IdiomaService],
})
export class IdiomaModule {}
