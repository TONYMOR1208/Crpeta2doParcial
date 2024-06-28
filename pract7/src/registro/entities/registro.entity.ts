import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Field(() => String)
  @Column()
  createdAt: string;

  @Field(() => String)
  @Column()
  updatedAt: string;

  @ManyToOne(() => Idioma, idioma => idioma.registros)
  idioma: Idioma;

  @ManyToOne(() => Palabra, palabra => palabra.registros)
  palabra: Palabra;

}
