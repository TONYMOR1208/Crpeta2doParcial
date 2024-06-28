import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Registro } from 'src/registro/entities/registro.entity';
@ObjectType()

@Entity({name: 'idioma'})

export class Idioma {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  descripcion: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @OneToMany(() => Registro, registro => registro.idioma)
  registros: Registro[]; 


}
