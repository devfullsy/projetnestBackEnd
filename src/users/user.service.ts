import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(newUser: IUser): any {
    const nouveauUser = {
      ...newUser,
    };
    this.userRepository.save(nouveauUser);
    return '200';
  }

  commentaire(id: number, commentaire: any) {
    this.userRepository.update(id, commentaire);
  }

  openSession(mail: string, mdp: string): Promise<User> {

    return this.userRepository.findOne({
      where: {
        email: mail,
        password: mdp,
      },
    });
  }
}
