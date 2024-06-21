
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Palabra {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 100 })
  palabra: string;

  @Column({ length: 100 })
  deletreo: string;

  @Column({ length: 20 })
  estado: string;
}
