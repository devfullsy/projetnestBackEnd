import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository]
})
export class userModule { }