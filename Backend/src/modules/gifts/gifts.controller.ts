import { Controller, Get, Patch, Post, Delete, Body, Param, Query } from "@nestjs/common";
import { GiftsService } from "./gifts.service";
import { Gift } from "@shared/entities/gift.entity";

@Controller("gifts")
export class GiftsController {

    constructor(
        private readonly giftsService: GiftsService
    ) {}
    
    @Post()
    async createGift(
        @Body() gift: Gift
    ) {
        return await this.giftsService.create(gift);
    }
    
    @Get()
    async readAllGifts() {
        return await this.giftsService.readAll();
    }
    
    @Get("available")
    async readAvaiableGifts() {
        return await this.giftsService.readAllAvaiables();
    }
    
    @Get("purchased")
    async readPurchasedGifts() {
        return await this.giftsService.readAllPurchased();
    }
    
    @Get(":id")
    async readGift(
        @Param("id") id: string
    ) {
        return await this.giftsService.readOne(id);
    }
    
    @Patch("purchase/:id")
    async purchaseGift(
        @Param("id") id: string,
        @Query("purchaser") purchaser: string
    ) {
        return await this.giftsService.purchaseGift(id, purchaser);
    }
    
    @Patch(":id")
    async updateGift(
        @Param("id") id: string,
        @Body() gift: Gift
    ) {
        return await this.giftsService.update(id, gift);
    }
    
    @Delete(":id")
    async deleteGift(
        @Param("id") id: string
    ) {
        return await this.giftsService.delete(id);
    }
    
}