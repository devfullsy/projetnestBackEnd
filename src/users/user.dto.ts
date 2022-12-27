import { IsString } from 'class-validator';

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

  @IsString()
  poid: string;

  @IsString()
  commentaire: string;

}
