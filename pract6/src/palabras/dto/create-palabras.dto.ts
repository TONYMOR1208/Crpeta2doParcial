// src/palabra/dto/create-palabra.dto.ts
import { IsNotEmpty, IsString, IsNumber, Min, MaxLength}  from 'class-validator';

export class CreatePalabraDto {
  @IsNotEmpty()
  @IsString()
  palabra: string;

  @IsNotEmpty()
  @IsString()
  deletreo: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  silabas: number;

  @IsString()
  fonetica: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  estado: string;

  @IsNotEmpty()
  @IsNumber()
  idiomaId: number; 
}
