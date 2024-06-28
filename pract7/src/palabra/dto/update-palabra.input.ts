import { CreatePalabraInput } from './create-palabra.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePalabraInput extends PartialType(CreatePalabraInput) {
  @Field(() => Int)
  id: number;
}
