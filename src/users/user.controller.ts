import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:email/:password')
  opensession(
    @Param('email') email : string,
    @Param('password') password : string
    ):Promise<User>{
      return this.userService.openSession(email,password) ;
      
  }
}
