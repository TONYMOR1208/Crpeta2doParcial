import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePalabraDto {
  @IsString()
  @IsNotEmpty()
  palabra: string;

  @IsString()
  @IsNotEmpty()
  deletreo: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
