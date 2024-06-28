import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Registro } from 'src/registro/entities/registro.entity';

@ObjectType()
@Entity({ name: 'idioma' })
export class Idioma {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  nombre: string;

  @Field(() => String)
  @Column()
  descripcion: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: string;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Registro, registro => registro.idioma)
  @Field(() => [Registro])
  registros: Registro[];
}
