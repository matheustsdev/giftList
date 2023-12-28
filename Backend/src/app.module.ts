import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RepositoryService } from "@database/repositories/repository.service";
import { RepositoryModule } from "@database/repositories/repository.module";
import typeormConfig from "@database/migrations/config";
import { GiftsModule } from "@modules/gifts/gifts.module";

@Module({
  imports: [
    RepositoryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.get("typeorm")
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      schema: process.env.DB_SCHEMA,
      synchronize: true,
      entities: ["@shared/entities/*.entity.ts"],
    }),

    RepositoryModule,
    GiftsModule
  ],
  controllers: [AppController],
  providers: [AppService, RepositoryService],
})
export class AppModule {}
