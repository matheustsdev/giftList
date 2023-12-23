import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gift } from '../../../../Shared/entities/Gift';
import RepositoryService from './repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gift])],
  controllers: [],
  providers: [RepositoryService],
  exports: [RepositoryService, TypeOrmModule],
})
export class RepositoryModule {}
