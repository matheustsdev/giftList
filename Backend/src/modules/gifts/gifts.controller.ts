import { Controller, Get } from "@nestjs/common";
import { GiftsService } from "./gifts.service";

@Controller("gifts")
export class GiftsController {

    constructor(
        private readonly giftsService: GiftsService
    ) {}

    @Get()
    async readToPurchaseGifts() {
        return await this.giftsService.findAllActives();
    }
}