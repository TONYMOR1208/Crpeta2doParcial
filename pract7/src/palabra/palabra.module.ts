import { Module } from '@nestjs/common';
import { PalabraService } from './palabra.service';
import { PalabraResolver } from './palabra.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palabra } from './entities/palabra.entity';

@Module({
  providers: [PalabraResolver, PalabraService],
  imports: [TypeOrmModule.forFeature([Palabra])],
  exports: [TypeOrmModule],
})
export class PalabraModule {}
