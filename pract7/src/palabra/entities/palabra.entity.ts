import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Registro } from 'src/registro/entities/registro.entity';

@ObjectType()
@Entity({ name: 'palabra' })
export class Palabra {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  palabra: string;

  @Field(() => String)
  @Column()
  deletreo: string;

  @Field(() => Int)
  @Column()
  silabas: number;

  @Field(() => String)
  @Column()
  fonetica: string;

  @Column('text')
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Registro, 
    registro => registro.palabra,
    {cascade: true})
  registro: Registro[];
}
