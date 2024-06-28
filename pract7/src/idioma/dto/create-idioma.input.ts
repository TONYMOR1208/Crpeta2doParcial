import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString} from 'class-validator';

@InputType()
export class CreateIdiomaInput {
  @Field(() => String, {nullable: true})
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field( () => String) 
  @IsString()
  descripcion: string;

  @Field( () => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
