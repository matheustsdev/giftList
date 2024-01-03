import { Controller, Get, Patch, Post, Delete, Body, Param, Query } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {

    constructor(
        private readonly paymentsService: PaymentsService
    ) {}
    
    @Post()
    async createSession() {
        return await this.paymentsService.test();
    }
    
}