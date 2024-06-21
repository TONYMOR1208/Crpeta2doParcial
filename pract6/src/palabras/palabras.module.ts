import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palabra } from './entities/palabras.entity';
import { PalabraService } from './palabras.service';
import { PalabraController } from './palabras.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Palabra])],
  providers: [PalabraService],
  controllers: [PalabraController],
  exports: [PalabraService],
})
export class PalabraModule {}
