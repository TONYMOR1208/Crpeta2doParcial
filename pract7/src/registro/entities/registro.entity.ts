import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';

@ObjectType()
@Entity({ name: 'registro' })
export class Registro {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  @Column()
  idiomaId: number;

  @Field(() => Int)
  @Column()
  palabraId: number;

  @Field(() => String)
  @Column()
  deletreo: string;

  @Field(() => Int)
  @Column()
  silabas: number;

  @Field(() => String)
  @Column()
  fonetica: string;

  @Field(() => String)
  @Column()
  estado: string;

  @ManyToOne(
    () => Idioma, 
    palabra => palabra.registro,
    {eager: true})
    idioma: Idioma;




  @ManyToOne(
    () => Palabra, 
    palabra => palabra.registro,
    {eager: true})
    palabra: Palabra;

 

}
