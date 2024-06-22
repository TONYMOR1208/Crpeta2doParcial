// src/registro/registro.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Idioma } from 'src/idiomas/entities/idiomas.entity';
import { Palabra } from 'src/palabras/entities/palabras.entity';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Idioma, idioma => idioma.registros, { onDelete: 'CASCADE' })
  idioma: Idioma;

  @ManyToOne(() => Palabra, palabra => palabra.registros, { onDelete: 'CASCADE' })
  palabra: Palabra;

  @Column({ length: 255, nullable: false })
  deletreo: string;

  @Column({ nullable: false })
  silabas: number;

  @Column('text', { nullable: true })
  fonetica: string;

  @Column({ length: 20, nullable: false })
  estado: string;
}
