import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Program {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  niveau: string;

  @Column()
  seances: string;

  @Column()
  alimentation: string;

  @Column()
  seche: string;

  @Column()
  masse: string;
}
