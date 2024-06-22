import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalabraService } from './palabras.service';
import { PalabraController } from './palabras.controller';
import { Palabra } from './entities/palabras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Palabra])],
  controllers: [PalabraController],
  providers: [PalabraService],
})
export class PalabrasModule {}
