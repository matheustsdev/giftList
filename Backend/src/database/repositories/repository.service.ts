import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gift } from '../../../../Shared/entities/gift.entity';

export class RepositoryService {
  constructor(
    @InjectRepository(Gift) public readonly reg_gifts: Repository<Gift>,
  ) {}
}
