import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Entity } from 'typeorm';
import { Idioma } from 'src/idioma/entities/idioma.entity';
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

  @Field(() => String)
  @Column()
  estado: string;

  @ManyToOne(() => Idioma, idioma => idioma.registros)
  @Field(() => Idioma)
  idioma: Idioma;

  @OneToMany(() => Registro, registro => registro.palabra)
  @Field(() => [Registro])
  registros: Registro[];
}
