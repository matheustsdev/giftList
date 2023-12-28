import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gift } from "@shared/entities/gift.entity";
import { RepositoryService } from '@database/repositories/repository.service';
import { StandartResponse } from 'src/helpers/StandartResponse';
import { EResponseStatus } from 'src/constants/EResponseStatus';

@Injectable()
export class GiftsService {
    constructor(
        private readonly repositories: RepositoryService
    ) { }

    async findAllActives() {
        try {
            const gifts = await this.repositories.reg_gifts.find({
                where: {
                    hasPurchased: false
                }
            })

            return new StandartResponse(gifts, EResponseStatus.SUCCESS)
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
}