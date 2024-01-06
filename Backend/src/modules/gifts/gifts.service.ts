import { Injectable } from '@nestjs/common';
import { Gift } from "@shared/entities/gift.entity";
import { RepositoryService } from '@database/repositories/repository.service';
import { StandartResponse } from '@shared/helpers/StandartResponse';
import { EResponseStatus } from '@shared/constants/EResponseStatus';

@Injectable()
export class GiftsService {
    constructor(
        private readonly repositories: RepositoryService
    ) { }

    async create(gift: Gift) {
        try {
            const newGift = await this.repositories.reg_gifts.save(gift);

            return new StandartResponse<Gift>([newGift], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async readAll() {
        try {
            const gifts = await this.repositories.reg_gifts.find();

            return new StandartResponse<Gift>(gifts, EResponseStatus.SUCCESS)
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async readAllAvaiables() {
        try {
            const gifts = await this.repositories.reg_gifts.find({
                where: {
                    hasPurchased: false
                }
            })

            return new StandartResponse<Gift>(gifts, EResponseStatus.SUCCESS)
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
   
    async readAllPurchased() {
        try {
            const gifts = await this.repositories.reg_gifts.find({
                where: {
                    hasPurchased: true
                }
            })

            return new StandartResponse<Gift>(gifts, EResponseStatus.SUCCESS)
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async readOne(id: string) {
        try {
            const gift = await this.repositories.reg_gifts.findOne({
                where: {
                    gift_id: id
                }
            });

            if (!gift) {
                return new StandartResponse([], EResponseStatus.ERROR, "Gift not found");
            }

            return new StandartResponse<Gift>([gift], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async update(id: string, gift: Gift) {
        try {
            const giftToUpdate = await this.repositories.reg_gifts.findOne({
                where: {
                    gift_id: id
                }
            });

            if (!giftToUpdate) {
                return new StandartResponse<Gift>([], EResponseStatus.ERROR, "Gift not found");
            }

            const updatedGift = await this.repositories.reg_gifts.save({
                ...giftToUpdate,
                ...gift
            });

            return new StandartResponse<Gift>([updatedGift], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async purchaseGift(id: string, purchaser: string) {
        try {
            const gift = await this.repositories.reg_gifts.findOne({
                where: {
                    gift_id: id
                }
            });

            if (!gift) {
                return new StandartResponse([], EResponseStatus.ERROR, "Gift not found");
            }

            gift.hasPurchased = true;
            gift.purchased_date = new Date();
            gift.purchasedBy = purchaser;

            await this.repositories.reg_gifts.save(gift);

            return new StandartResponse<Gift>([gift], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
    
    async delete(id: string) {
        try {
            const gift = await this.repositories.reg_gifts.findOne({
                where: {
                    gift_id: id
                }
            });

            if (!gift) {
                return new StandartResponse([], EResponseStatus.ERROR, "Gift not found");
            }

            await this.repositories.reg_gifts.delete(gift);

            return new StandartResponse<Gift>([], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
    }
}