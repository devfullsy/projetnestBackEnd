import { IsString } from 'class-validator';


export class ProgramDto {

  @IsString()
  niveau: string;

  @IsString()
  seances: string;
  
  @IsString()
  alimentation: string;

  @IsString()
  seche: string;

  @IsString()
  masse: string;
}