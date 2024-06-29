import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Registro } from 'src/registro/entities/registro.entity';

@ObjectType()
@Entity({ name: 'idioma' })
export class Idioma {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field(() => String)
  @Column()
  nombre: string;

  @Field(() => String)
  @Column()
  descripcion: string;

  @Field(() => String)
  @Column()
  estado: string;

  @OneToMany(
    () => Registro, 
    registro => registro.idioma,
    {cascade: true})
  registro: Registro[];
}
