import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column('text')
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  niveau: string;

  @Column()
  poid: string;

  @Column()
  commentaire: string;
}
