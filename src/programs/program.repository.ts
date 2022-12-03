import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Program } from './program.entity';

@Injectable()
export class ProgramRepository extends Repository<Program> {
  constructor(private dataSource: DataSource) {
    super(Program, dataSource.createEntityManager());
  }
}