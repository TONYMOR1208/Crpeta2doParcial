import { Module } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { IdiomaResolver } from './idioma.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';

@Module({
  providers: [IdiomaResolver, IdiomaService],
  imports: [TypeOrmModule.forFeature([Idioma])],
  exports: [TypeOrmModule],
})
export class IdiomaModule {}
