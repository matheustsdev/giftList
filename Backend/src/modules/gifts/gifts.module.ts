import { Module } from "@nestjs/common";
import { RepositoryModule } from "@database/repositories/repository.module";
import { GiftsService } from "./gifts.service";
import { GiftsController } from "./gifts.controller";

@Module({
  imports: [RepositoryModule],
  controllers: [GiftsController],
  providers: [GiftsService],
})
export class GiftsModule {}
