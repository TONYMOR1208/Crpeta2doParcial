import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRegistroDto {
  @IsInt()
  ID_idioma: number;

  @IsInt()
  ID_palabra: number;

  @IsString()
  @IsNotEmpty()
  deletreo: string;

  @IsOptional()
  @IsInt()
  silabas?: number;

  @IsOptional()
  @IsString()
  fonetica?: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
