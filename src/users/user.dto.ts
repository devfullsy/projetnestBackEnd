import { IsNumber, IsString } from 'class-validator';

export class UserDto {

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  niveau: string;

  @IsNumber()
  poid: number;

  @IsString()
  commentaire: string;
  
}
