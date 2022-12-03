import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column('text')
  prenom: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  niveau: string;

  @Column()
  poid: number;
}
