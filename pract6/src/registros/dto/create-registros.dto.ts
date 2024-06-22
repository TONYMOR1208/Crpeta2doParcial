// src/registro/dto/create-registro.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRegistroDto {
  @IsNotEmpty()
  idiomaId: number;

  @IsNotEmpty()
  palabraId: number;

  @IsNotEmpty()
  deletreo: string;

  @IsNotEmpty()
  @IsNumber()
  silabas: number;

  @IsNotEmpty()
  @IsString()
  fonetica: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
