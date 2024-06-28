import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateRegistroInput {

  @Field(() => Number) 
  @IsNotEmpty()
  idiomaId: number;

  @Field(() => Number) 
  @IsNotEmpty()
  palabraId: number;

  @Field(() => String)
  @IsNotEmpty()
  deletreo: string;

  @Field(() => Number)
  @IsNotEmpty() 
  @IsNumber()
  silabas: number;

  @Field(() => String)
  @IsString()
  fonetica: string;

  @Field(() => String, {nullable: true})
  @IsOptional() 
  @IsString()
  estado: string;
}







