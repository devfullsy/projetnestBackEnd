import { Module } from "@nestjs/common";
import { ProgramRepository } from "./program.repository";
import { ProgramController } from "./program.controller";
import { ProgramService } from "./program.service";

@Module({
    controllers : [ProgramController],
    providers:[ProgramService, ProgramRepository]
})
export class programModule{}