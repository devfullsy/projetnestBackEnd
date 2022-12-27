import { Injectable } from '@nestjs/common';
import { Program } from './program.entity';
import { ProgramRepository } from './program.repository';

@Injectable()
export class ProgramService {
  constructor(private readonly programRepository: ProgramRepository) { }

  getAllProgram(): Promise<Program[]> {
    return this.programRepository.find();
  }
}