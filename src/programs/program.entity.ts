import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Program {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  niveau: string;

  @Column()
  seanceDebutant: string;

  @Column()
  seanceAvance: string;

  @Column()
  alimentation: string;

  @Column()
  seche: string;

  @Column()
  masse: string;
}
