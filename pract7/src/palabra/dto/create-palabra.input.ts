import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class CreatePalabraInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  palabraId: number; 


  
 @IsNumber()
 @IsNotEmpty()
   @Field(() => Int)
   id: number;
 

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  deletreo: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  silabas: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  fonetica: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  estado: string;


}
