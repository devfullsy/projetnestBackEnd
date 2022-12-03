import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository : UserRepository){}

  getAllUsers(): Promise<User[]>{
    return this.userRepository.find();
  }

  createUser(newUser :IUser): Promise<User>{
    const nouveauUser = {
      ...newUser,
    };
    return this.userRepository.save(nouveauUser);
  }

  openSession(mail : string, mdp : string): Promise<User>{

       return this.userRepository.findOne({
        where : {
          email:mail,
          password:mdp,
        },
       });   
  }
}
