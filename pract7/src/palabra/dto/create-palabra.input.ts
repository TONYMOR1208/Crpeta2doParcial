import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class CreatePalabraInput {
  @Field(() => String, {nullable: true})
  @IsNotEmpty()
  @IsString()
  palabra: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  deletreo: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  silabas: number;

  @Field(() => String)
  @IsString()
  fonetica: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  estado: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  idiomaId: number;
 
}
