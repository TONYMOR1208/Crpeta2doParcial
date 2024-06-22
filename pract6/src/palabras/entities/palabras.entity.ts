// src/palabra/palabra.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Idioma } from 'src/idiomas/entities/idiomas.entity';
import { Registro } from 'src/registros/entities/registros.entity';

@Entity()
export class Palabra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  palabra: string;

  @Column({ length: 255, nullable: false })
  deletreo: string;

  @Column({ nullable: false })
  silabas: number;

  @Column('text', { nullable: true })
  fonetica: string;

  @Column({ length: 20, nullable: false })
  estado: string;

  @ManyToOne(() => Idioma, idioma => idioma.palabras, { onDelete: 'CASCADE' })
  idioma: Idioma;

  @OneToMany(() => Registro, registro => registro.palabra)
  registros: Registro[];
}
