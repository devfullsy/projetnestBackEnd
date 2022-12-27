import { Controller, Get } from '@nestjs/common';
import { Program } from './program.entity';
import { ProgramService } from './program.service';

@Controller('programs')
export class ProgramController {
  constructor(private readonly programService: ProgramService) { }
  @Get('/program')
  getDebutant(): Promise<Program[]> {
    return this.programService.getAllProgram();
  }
}