import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Idioma } from 'src/idiomas/entities/idiomas.entity';
import { Palabra } from 'src/palabras/entities/palabras.entity';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(() => Idioma)
  ID_idioma: Idioma;

  @ManyToOne(() => Palabra)
  ID_palabra: Palabra;

  @Column({ length: 100 })
  deletreo: string;

  @Column({ nullable: true })
  silabas: number;

  @Column({ length: 100, nullable: true })
  fonetica: string;

  @Column({ length: 20 })
  estado: string;
}
