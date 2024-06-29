import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

@InputType()
export class CreateIdiomaInput {

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  nombre: string;


 @IsNumber()
@IsNotEmpty()
  @Field(() => Int)
  id: number;



  @Field( () => String) 
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field( () => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
