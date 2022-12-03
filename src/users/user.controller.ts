import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/:all')
  getAllVehicles(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
 @Post()
  createUser( 
    @Body() newUser:UserDto,
    ): Promise<User>{
      return this.userService.createUser(newUser);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }*/

  @Patch('/:id')
  commentaire(
    @Param('id') id : number , @Body() texte: string 
  ){
      this.userService.commentaire(id,texte);
  }

  @Get('/:email/:password')
  opensession(
    @Param('email') email : string,
    @Param('password') password : string
    ):Promise<User>{
      return this.userService.openSession(email,password) ;
      
  }
}
