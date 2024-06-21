
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Idioma {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ length: 20 })
  estado: string;
}
