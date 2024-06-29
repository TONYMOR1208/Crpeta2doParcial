import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

@InputType()
export class CreateRegistroInput {

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  idiomaid: number;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  palabraid: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  deletreo: string;

  @Field(() => Number)
  @IsNotEmpty() 
  @IsNumber()
  silabas: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fonetica: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
 
}







