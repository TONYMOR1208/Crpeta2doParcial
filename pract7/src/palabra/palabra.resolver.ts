import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PalabraService } from './palabra.service';
import { Palabra } from './entities/palabra.entity';
import { CreatePalabraInput } from './dto/create-palabra.input';
import { UpdatePalabraInput } from './dto/update-palabra.input';

@Resolver(() => Palabra)
export class PalabraResolver {
  constructor(private readonly palabraService: PalabraService) {}

  @Mutation(() => Palabra)
  createPalabra(@Args('createPalabraInput') createPalabraInput: CreatePalabraInput) {
    return this.palabraService.create(createPalabraInput);
  }

  @Query(() => [Palabra], { name: 'palabras' })
  findAll( @Args('estado', {type: ()=> String, nullable: true}) estado:string) {
    return this.palabraService.findAll( estado);
  }

  @Query(() => Palabra, { name: 'palabra' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.palabraService.findOne(id);
  }

  @Mutation(() => Palabra)
  updatePalabra(@Args('updatePalabraInput') updatePalabraInput: UpdatePalabraInput) {
    return this.palabraService.update(updatePalabraInput.id, updatePalabraInput);
  }

  @Mutation(() => Palabra)
  removePalabra(@Args('id', { type: () => Int }) id: number) {
    return this.palabraService.remove(id);
  }
}
