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
    palabra: string;
  
    @Field(() => String)
    deletreo: string;
  
    @Field(() => Int)
    silabas: number;
  
    @Field(() => String)
    fonetica: string;
  
    @Field(() => String)
    estado: string;
  
    @ManyToOne(() => Idioma, idioma => idioma.registros)
    idioma: Idioma;
  
    @OneToMany(() => Registro, registro => registro.palabra)
    registros: Registro[];
    
  }
  

