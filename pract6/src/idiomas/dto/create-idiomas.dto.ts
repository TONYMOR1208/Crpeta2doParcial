// src/idioma/dto/create-idioma.dto.ts
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateIdiomaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  estado: string;
}
