// src/idioma/idioma.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Palabra } from 'src/palabras/entities/palabras.entity';

@Entity()
export class Idioma {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column({ length: 20, nullable: false })
  estado: string;

  @OneToMany(() => Palabra, palabra => palabra.idioma)
  palabras: Palabra[];
  registros: any;
}
